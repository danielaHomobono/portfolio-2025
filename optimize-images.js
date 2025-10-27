import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/assets/img';
const outputDir = './public/assets/img/optimized';

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [
  { suffix: 'small', width: 400, quality: 80 },
  { suffix: 'medium', width: 800, quality: 85 },
  { suffix: 'large', width: 1200, quality: 90 }
];

async function optimizeImages() {
  const files = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;
    
    console.log(`Optimizando: ${file}`);

    try {
      // Generar diferentes tamaños en WebP
      for (const size of sizes) {
        const webpOutput = path.join(outputDir, `${baseName}-${size.suffix}.webp`);
        await sharp(inputPath)
          .resize(size.width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: size.quality })
          .toFile(webpOutput);
        
        console.log(`✓ Creado: ${baseName}-${size.suffix}.webp`);
      }

      // Crear versión WebP original
      const originalWebp = path.join(outputDir, `${baseName}.webp`);
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(originalWebp);
      
      console.log(`✓ Creado: ${baseName}.webp`);

      // Optimizar PNG/JPG originales
      for (const size of sizes) {
        const ext = path.parse(file).ext;
        const optimizedOutput = path.join(outputDir, `${baseName}-${size.suffix}${ext}`);
        
        const pipeline = sharp(inputPath)
          .resize(size.width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          });

        if (ext.toLowerCase() === '.png') {
          await pipeline.png({ quality: size.quality, compressionLevel: 9 }).toFile(optimizedOutput);
        } else {
          await pipeline.jpeg({ quality: size.quality, progressive: true }).toFile(optimizedOutput);
        }
        
        console.log(`✓ Creado: ${baseName}-${size.suffix}${ext}`);
      }

    } catch (error) {
      console.error(`Error procesando ${file}:`, error.message);
    }
  }

  console.log('\n🎉 Optimización completada!');
  console.log('\nPróximos pasos:');
  console.log('1. Actualiza las rutas de imágenes en tu código');
  console.log('2. Usa el componente OptimizedImage en lugar de <img>');
  console.log('3. Considera eliminar las imágenes originales grandes');
}

optimizeImages();