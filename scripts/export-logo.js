/*
  Export Polaris IA logo PNGs from SVG using sharp.
  Outputs to: public/
  Sizes: 360x100, 720x200, 1440x400
  Background: transparent
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const svgPath = path.join(projectRoot, 'src', 'assets', 'polaris-ia-logo.svg');
  const outDir = path.join(projectRoot, 'public');

  if (!fs.existsSync(svgPath)) {
    console.error(`SVG introuvable: ${svgPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const sizes = [
    { w: 360, h: 100 },
    { w: 720, h: 200 },
    { w: 1440, h: 400 },
  ];

  const svg = fs.readFileSync(svgPath);

  for (const { w, h } of sizes) {
    const outFile = path.join(outDir, `polaris-ia-logo-${w}x${h}.png`);
    console.log(`Génération: ${outFile}`);
    // sharp will respect density for quality when rasterizing SVG
    await sharp(svg, { density: 300 })
      .resize({ width: w, height: h, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(outFile);
  }

  console.log('Export terminé. Fichiers disponibles dans /public');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
