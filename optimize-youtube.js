import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeYouTubeImages() {
  const inputPath = path.join(__dirname, 'public', 'images', 'youtube-video-preview-img.jpg');
  const outputDir = path.join(__dirname, 'public', 'images');
  
  try {
    // Create highly optimized 256w WebP (for mobile LCP)
    await sharp(inputPath)
      .resize(256, null, { withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 }) // Higher compression for faster loading
      .toFile(path.join(outputDir, 'youtube-video-preview-256.webp'));
    
    // Create optimized 512w WebP
    await sharp(inputPath)
      .resize(512, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(outputDir, 'youtube-video-preview-512.webp'));
    
    console.log('✅ YouTube images re-optimized for faster LCP!');
    
    // Check new file sizes
    const stats256 = await import('fs').then(fs => fs.promises.stat(path.join(outputDir, 'youtube-video-preview-256.webp')));
    const stats512 = await import('fs').then(fs => fs.promises.stat(path.join(outputDir, 'youtube-video-preview-512.webp')));
    
    console.log(`256w: ${Math.round(stats256.size / 1024)} KB`);
    console.log(`512w: ${Math.round(stats512.size / 1024)} KB`);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeYouTubeImages();