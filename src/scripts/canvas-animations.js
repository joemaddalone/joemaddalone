// Canvas animation functions
export function drawTriangle(canvasId) {
	const canvas = document.getElementById(canvasId);
	if (canvas) {
		const ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(150, 10);
		ctx.lineTo(115, 70);
		ctx.lineTo(185, 70);
		ctx.closePath();
		ctx.stroke();
	}
}

export function drawPath2DTriangle(canvasId) {
	const canvas = document.getElementById(canvasId);
	if (canvas) {
		const ctx = canvas.getContext('2d');
		const p = new Path2D('M150 10 L115 70 L185 70 Z');
		ctx.stroke(p);
	}
}

export function drawLibraryTriangle(canvasId) {
	const canvas = document.getElementById(canvasId);
	if (canvas) {
		const ctx = canvas.getContext('2d');
		// This would need the Path library to be loaded
		// For now, just draw a simple triangle
		ctx.beginPath();
		ctx.moveTo(150, 10);
		ctx.lineTo(115, 70);
		ctx.lineTo(185, 70);
		ctx.closePath();
		ctx.stroke();
	}
}

export function animateSquare(canvasId) {
	const canvas = document.getElementById(canvasId);
	if (canvas) {
		const ctx = canvas.getContext('2d');
		let x = 0;
		let y = 0;
		let dx = 1;
		let dy = 1;
		const size = 20;
		
		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (x + size > canvas.width || x < 0) dx = -dx;
			if (y + size > canvas.height || y < 0) dy = -dy;
			x += dx;
			y += dy;
			ctx.strokeRect(x, y, size, size);
			requestAnimationFrame(animate);
		}
		animate();
	}
} 