// Configuration constants
const CONFIG = {
    SEAM_HIGHLIGHT_DURATION: 20,  // ms
    PROCESSING_DELAY: 25,         // ms
    RESET_DELAY: 100,             // ms
    SEAM_COLOR: { r: 255, g: 255, b: 255, a: 255 }, // White highlight
    BUTTON_IDS: ['carveBtn_100', 'carveBtn_80', 'carveBtn_60', 'carveBtn_40', 'carveBtn_20'],
    IMAGE_PATH: "/assets/exp/seam/y.jpg"
};

// DOM element cache
const DOM = {
    info: null,
    buttons: {},
    container: null,
    init() {
        this.info = document.getElementById("info");
        this.container = document.querySelector(".container");
        CONFIG.BUTTON_IDS.forEach(id => {
            this.buttons[id] = document.getElementById(id);
        });
    }
};

// Global state
let originalImageData = null;
let currentImageData = null;
let canvas, ctx;
let imageWidth, imageHeight;
let currentCarveCount = 0;
let isProcessing = false;
let processingTimeout = null;

/**
 * Cleanup function to prevent memory leaks
 */
function cleanup() {
    if (processingTimeout) {
        clearTimeout(processingTimeout);
        processingTimeout = null;
    }
    isProcessing = false;
    setButtonsEnabled(true);
}

/**
 * Enable/disable all buttons with visual feedback
 * @param {boolean} enabled - Whether to enable or disable buttons
 */
function setButtonsEnabled(enabled) {
    CONFIG.BUTTON_IDS.forEach(btnId => {
        const button = DOM.buttons[btnId];
        if (button) {
            button.disabled = !enabled;
            button.style.opacity = enabled ? '1' : '0.5';
            button.style.cursor = enabled ? 'pointer' : 'not-allowed';
        }
    });
}

/**
 * Initialize the seam carving application
 */
function init() {
    if (!DOM.container) {
        console.error("Container element not found");
        return;
    }

    canvas = document.createElement("canvas");
    canvas.id = "c";
    DOM.container.appendChild(canvas);
    ctx = canvas.getContext("2d");

    let img = new Image();
    img.onerror = function() {
        console.error("Failed to load image");
        if (DOM.info) {
            DOM.info.textContent = "Error: Failed to load image";
        }
    };
    
    img.onload = function () {
        imageWidth = img.width;
        imageHeight = img.height;
        canvas.width = imageWidth;
        canvas.height = imageHeight;
        ctx.drawImage(img, 0, 0);

        // Store original image data
        originalImageData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height,
        );
        currentImageData = new ImageData(
            new Uint8ClampedArray(originalImageData.data),
            originalImageData.width,
            originalImageData.height,
        );

        updateInfo();
    };
    
    img.src = CONFIG.IMAGE_PATH;
}

/**
 * Update the info display with current image statistics
 */
function updateInfo() {
    if (!originalImageData || !currentImageData || !DOM.info) return;
    
    const currentPercentage = Math.round((currentImageData.width / originalImageData.width) * 100);
    DOM.info.textContent =
        `Image size: ${currentImageData.width} x ${currentImageData.height} (${currentPercentage}% of original, Carved: ${currentCarveCount})`;
}

/**
 * Calculate the energy map for seam carving using gradient magnitude
 * @param {ImageData} imageData - The image data to process
 * @returns {Array<number>} Energy values for each pixel
 */
function calculateEnergy(imageData) {
    const width = imageData.width;
    const height = imageData.height;
    const data = imageData.data;
    const energy = new Array(width * height);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;

            // Get RGB values
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];

            // Calculate gradients
            let gradX = 0,
                gradY = 0;

            // X gradient
            if (x > 0 && x < width - 1) {
                const leftIdx = (y * width + (x - 1)) * 4;
                const rightIdx = (y * width + (x + 1)) * 4;

                const leftR = data[leftIdx];
                const leftG = data[leftIdx + 1];
                const leftB = data[leftIdx + 2];

                const rightR = data[rightIdx];
                const rightG = data[rightIdx + 1];
                const rightB = data[rightIdx + 2];

                gradX = Math.sqrt(
                    Math.pow(rightR - leftR, 2) +
                    Math.pow(rightG - leftG, 2) +
                    Math.pow(rightB - leftB, 2),
                );
            }

            // Y gradient
            if (y > 0 && y < height - 1) {
                const topIdx = ((y - 1) * width + x) * 4;
                const bottomIdx = ((y + 1) * width + x) * 4;

                const topR = data[topIdx];
                const topG = data[topIdx + 1];
                const topB = data[topIdx + 2];

                const bottomR = data[bottomIdx];
                const bottomG = data[bottomIdx + 1];
                const bottomB = data[bottomIdx + 2];

                gradY = Math.sqrt(
                    Math.pow(bottomR - topR, 2) +
                    Math.pow(bottomG - topG, 2) +
                    Math.pow(bottomB - topB, 2),
                );
            }

            energy[y * width + x] = Math.sqrt(
                gradX * gradX + gradY * gradY,
            );
        }
    }

    return energy;
}

/**
 * Find the lowest energy seam using dynamic programming
 * @param {Array<number>} energy - Energy values for each pixel
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {Array<number>} Seam path (x coordinates for each row)
 */
function findVerticalSeam(energy, width, height) {
    const dp = new Array(width * height);
    const path = new Array(width * height);

    // Initialize first row
    for (let x = 0; x < width; x++) {
        dp[x] = energy[x];
    }

    // Fill DP table
    for (let y = 1; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let minEnergy = dp[(y - 1) * width + x];
            let minX = x;

            if (x > 0) {
                const leftEnergy = dp[(y - 1) * width + (x - 1)];
                if (leftEnergy < minEnergy) {
                    minEnergy = leftEnergy;
                    minX = x - 1;
                }
            }

            if (x < width - 1) {
                const rightEnergy = dp[(y - 1) * width + (x + 1)];
                if (rightEnergy < minEnergy) {
                    minEnergy = rightEnergy;
                    minX = x + 1;
                }
            }

            dp[y * width + x] = minEnergy + energy[y * width + x];
            path[y * width + x] = minX;
        }
    }

    // Find the minimum energy path
    let minX = 0;
    let minEnergy = dp[(height - 1) * width];

    for (let x = 1; x < width; x++) {
        if (dp[(height - 1) * width + x] < minEnergy) {
            minEnergy = dp[(height - 1) * width + x];
            minX = x;
        }
    }

    // Reconstruct the seam
    const seam = new Array(height);
    seam[height - 1] = minX;

    for (let y = height - 1; y > 0; y--) {
        seam[y - 1] = path[y * width + seam[y]];
    }

    return seam;
}

/**
 * Highlight the seam in the specified color
 * @param {ImageData} imageData - Original image data
 * @param {Array<number>} seam - Seam path
 * @returns {ImageData} Image data with highlighted seam
 */
function highlightSeam(imageData, seam) {
    const width = imageData.width;
    const height = imageData.height;
    const data = imageData.data;

    // Create a copy of the image data to highlight
    const highlightedData = new Uint8ClampedArray(data);

    // Highlight each pixel in the seam
    for (let y = 0; y < height; y++) {
        const seamX = seam[y];
        const idx = (y * width + seamX) * 4;

        // Set to highlight color
        highlightedData[idx] = CONFIG.SEAM_COLOR.r;     // Red
        highlightedData[idx + 1] = CONFIG.SEAM_COLOR.g; // Green
        highlightedData[idx + 2] = CONFIG.SEAM_COLOR.b; // Blue
        highlightedData[idx + 3] = CONFIG.SEAM_COLOR.a; // Alpha
    }

    return new ImageData(highlightedData, width, height);
}

/**
 * Remove the seam from the image
 * @param {ImageData} imageData - Original image data
 * @param {Array<number>} seam - Seam path
 * @returns {ImageData} Image data with seam removed
 */
function removeVerticalSeam(imageData, seam) {
    const width = imageData.width;
    const height = imageData.height;
    const data = imageData.data;

    const newData = new Uint8ClampedArray((width - 1) * height * 4);

    for (let y = 0; y < height; y++) {
        const seamX = seam[y];

        // Copy pixels before the seam
        for (let x = 0; x < seamX; x++) {
            const oldIdx = (y * width + x) * 4;
            const newIdx = (y * (width - 1) + x) * 4;
            newData[newIdx] = data[oldIdx];
            newData[newIdx + 1] = data[oldIdx + 1];
            newData[newIdx + 2] = data[oldIdx + 2];
            newData[newIdx + 3] = data[oldIdx + 3];
        }

        // Copy pixels after the seam
        for (let x = seamX + 1; x < width; x++) {
            const oldIdx = (y * width + x) * 4;
            const newIdx = (y * (width - 1) + (x - 1)) * 4;
            newData[newIdx] = data[oldIdx];
            newData[newIdx + 1] = data[oldIdx + 1];
            newData[newIdx + 2] = data[oldIdx + 2];
            newData[newIdx + 3] = data[oldIdx + 3];
        }
    }

    return new ImageData(newData, width - 1, height);
}

/**
 * Main seam carving function with visualization
 * @returns {boolean} Success status
 */
function carveVerticalSeam() {
    if (!currentImageData || currentImageData.width <= 1) {
        return false;
    }

    // Calculate energy
    const energy = calculateEnergy(currentImageData);

    // Find seam
    const seam = findVerticalSeam(
        energy,
        currentImageData.width,
        currentImageData.height,
    );

    // Highlight the seam and show it briefly
    const highlightedImage = highlightSeam(currentImageData, seam);
    canvas.width = highlightedImage.width;
    canvas.height = highlightedImage.height;
    ctx.putImageData(highlightedImage, 0, 0);

    // Wait a moment to show the highlighted seam, then remove it
    setTimeout(() => {
        // Remove seam
        currentImageData = removeVerticalSeam(currentImageData, seam);

        // Update canvas with the carved image
        canvas.width = currentImageData.width;
        canvas.height = currentImageData.height;
        ctx.putImageData(currentImageData, 0, 0);

        currentCarveCount++;
        updateInfo();
    }, CONFIG.SEAM_HIGHLIGHT_DURATION);

    return true;
}

/**
 * Reset to original image
 */
function resetImage() {
    if (originalImageData) {
        setButtonsEnabled(false); // Disable buttons during reset

        currentImageData = new ImageData(
            new Uint8ClampedArray(originalImageData.data),
            originalImageData.width,
            originalImageData.height,
        );
        canvas.width = originalImageData.width;
        canvas.height = originalImageData.height;
        ctx.putImageData(currentImageData, 0, 0);
        currentCarveCount = 0;
        updateInfo();

        setButtonsEnabled(true); // Re-enable buttons after reset
    }
}

/**
 * Process carving with throttling and button management
 * @param {number} targetCarveCount - Number of seams to carve
 */
function processCarving(targetCarveCount) {
    if (isProcessing) {
        return;
    }

    isProcessing = true;
    setButtonsEnabled(false); // Disable buttons during processing

    const processStep = () => {
        if (currentCarveCount < targetCarveCount) {
            if (carveVerticalSeam()) {
                // Continue processing after the seam is removed
                processingTimeout = setTimeout(processStep, CONFIG.PROCESSING_DELAY);
            } else {
                isProcessing = false;
                setButtonsEnabled(true); // Re-enable buttons when done
            }
        } else {
            isProcessing = false;
            setButtonsEnabled(true); // Re-enable buttons when done
        }
    };

    processStep();
}

/**
 * Smart carving function that handles percentage-based carving
 * @param {number} targetPercentage - Target percentage of original width
 */
function carveToPercentage(targetPercentage) {
    if (!originalImageData) return;
    
    // Validate input
    if (typeof targetPercentage !== 'number' || targetPercentage < 0 || targetPercentage > 100) {
        console.error("Invalid target percentage:", targetPercentage);
        return;
    }

    const targetWidth = Math.floor(originalImageData.width * (targetPercentage / 100));
    const currentWidth = currentImageData.width;

    if (targetWidth < currentWidth) {
        // Need to carve more seams to reach target
        const seamsToCarve = currentWidth - targetWidth;
        processCarving(currentCarveCount + seamsToCarve);
    } else if (targetWidth > currentWidth) {
        // Disable buttons during the reset and carving process
        setButtonsEnabled(false);

        // Reset the image data
        currentImageData = new ImageData(
            new Uint8ClampedArray(originalImageData.data),
            originalImageData.width,
            originalImageData.height,
        );
        currentCarveCount = 0;

        // Update canvas to show reset state briefly
        canvas.width = originalImageData.width;
        canvas.height = originalImageData.height;
        ctx.putImageData(currentImageData, 0, 0);
        updateInfo();

        // Start carving after a brief delay to show the reset
        setTimeout(() => {
            const seamsToCarve = originalImageData.width - targetWidth;
            processCarving(seamsToCarve);
        }, CONFIG.RESET_DELAY);
    }
}

/**
 * Setup event listeners for all buttons
 */
function setupEventListeners() {
    const percentageMap = {
        'carveBtn_100': 100,
        'carveBtn_80': 80,
        'carveBtn_60': 60,
        'carveBtn_40': 40,
        'carveBtn_20': 20
    };
    
    Object.entries(percentageMap).forEach(([btnId, percentage]) => {
        const button = DOM.buttons[btnId];
        if (button) {
            button.addEventListener("click", () => {
                if (percentage === 100) {
                    resetImage();
                } else {
                    carveToPercentage(percentage);
                }
            });
        }
    });
}

// Initialize when page loads
DOM.init();
init();
setupEventListeners();

// Cleanup on page unload
window.addEventListener('beforeunload', cleanup);