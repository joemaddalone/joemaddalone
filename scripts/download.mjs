import { promises as fs } from 'fs';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// const data = require('..');

export const downloadFile = async (url, path) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(path, buffer);
};

await Promise.all(data.map((b) => downloadFile(...)));
