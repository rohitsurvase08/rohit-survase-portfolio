const sharp = require('sharp');
const path = require('path');

async function checkIcon() {
  const iconPath = path.join(__dirname, '../../public/icon.png');
  const meta = await sharp(iconPath).metadata();
  console.log(`Icon dimensions: ${meta.width}x${meta.height}`);
  console.log(`Format: ${meta.format}`);
  console.log(`Has alpha: ${meta.hasAlpha}`);
}

checkIcon().catch(e => console.error(e));
