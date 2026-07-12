import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const filesToOptimize = [
  { path: 'public/images/games/waffle-icon.png', size: 168 },
  { path: 'public/img/howto-5.png', size: 600 },
  { path: 'public/img/howto-4.png', size: 600 },
  { path: 'public/img/howto-3.png', size: 600 },
  { path: 'public/img/howto-2.png', size: 600 },
  { path: 'public/img/howto-1.png', size: 600 },
  { path: 'public/images/games/connections-icon.png', size: 168 },
  { path: 'public/images/games/spellingbee-icon.png', size: 168 }
];

async function optimize() {
  for (const file of filesToOptimize) {
    const fullPath = path.resolve(process.cwd(), file.path);
    const parsed = path.parse(fullPath);
    const newPath = path.join(parsed.dir, `${parsed.name}.webp`);
    
    console.log(`Processing ${file.path}...`);
    try {
      await sharp(fullPath)
        .resize({ width: file.size, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(newPath);
      console.log(`Successfully created ${newPath}`);
    } catch (err) {
      console.error(`Failed to process ${file.path}: ${err}`);
    }
  }
}

optimize();
