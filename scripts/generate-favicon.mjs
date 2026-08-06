import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const svgPath = 'src/app/assets/logo.svg';
const outPath = 'public/favicon.ico';

const pngBuffer = await sharp(readFileSync(svgPath))
  .resize(32, 32)
  .png()
  .toBuffer();

// Wrap PNG in a minimal ICO container (PNG-in-ICO, supported by all modern browsers)
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: ICO
header.writeUInt16LE(1, 4); // image count: 1

const dir = Buffer.alloc(16);
dir.writeUInt8(32, 0);            // width
dir.writeUInt8(32, 1);            // height
dir.writeUInt8(0, 2);             // color count
dir.writeUInt8(0, 3);             // reserved
dir.writeUInt16LE(1, 4);          // color planes
dir.writeUInt16LE(32, 6);         // bits per pixel
dir.writeUInt32LE(pngBuffer.length, 8);  // image data size
dir.writeUInt32LE(22, 12);        // offset to image data (6 + 16)

writeFileSync(outPath, Buffer.concat([header, dir, pngBuffer]));
console.log(`favicon.ico written (${pngBuffer.length} bytes PNG data)`);
