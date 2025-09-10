// resize-images.js
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = './public/images/jennyHeadshotCropped.png';
const outputDir = './public/images/';

const sizes = [
  { name: 'jenny-256.jpg', size: 256, quality: 85 },
  { name: 'jenny-512.jpg', size: 512, quality: 85 },
  { name: 'jenny-1024.jpg', size: 1024, quality: 85 },
];

(async () => {
  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      return;
    }

    console.log('Starting image resize process...');

    for (const s of sizes) {
      const outputPath = path.join(outputDir, s.name);
      const webpPath = path.join(outputDir, s.name.replace('.jpg', '.webp'));

      // Create JPEG version
      await sharp(inputPath)
        .resize(s.size, s.size, { fit: 'cover', position: 'centre' })
        .jpeg({ quality: s.quality })
        .toFile(outputPath);
      console.log(`✓ Created ${s.name}`);

      // Create WebP version (smaller file size)
      await sharp(inputPath)
        .resize(s.size, s.size, { fit: 'cover', position: 'centre' })
        .webp({ quality: 80 })
        .toFile(webpPath);
      console.log(`✓ Created ${s.name.replace('.jpg', '.webp')}`);
    }

    console.log('\n🎉 All images created successfully!');
    console.log('Files created in public/images/:');
    console.log('- jenny-256.jpg & jenny-256.webp');
    console.log('- jenny-512.jpg & jenny-512.webp'); 
    console.log('- jenny-1024.jpg & jenny-1024.webp');

  } catch (error) {
    console.error('Error processing images:', error);
  }
})();
