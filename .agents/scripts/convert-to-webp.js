const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '../../public');

// Images to convert: photographic/raster images only
// DO NOT convert: PDFs, MP4, SVGs
// icon.png: Keep as PNG for favicon compatibility
const conversions = [
  { input: 'book_image.jpeg', output: 'book_image.webp', quality: 82 },
  { input: 'profile_image.png', output: 'profile_image.webp', quality: 85 },
];

async function main() {
  console.log('WebP Conversion Report');
  console.log('======================\n');
  const results = [];

  for (const c of conversions) {
    const inp = path.join(publicDir, c.input);
    const out = path.join(publicDir, c.output);
    
    if (!fs.existsSync(inp)) {
      console.log(`SKIP (not found): ${c.input}`);
      continue;
    }

    try {
      // Get metadata of original image
      const meta = await sharp(inp).metadata();
      const inSize = fs.statSync(inp).size;
      
      // Convert to WebP
      await sharp(inp)
        .webp({ quality: c.quality })
        .toFile(out);
      
      const outSize = fs.statSync(out).size;
      const pct = ((1 - outSize / inSize) * 100).toFixed(1);
      
      const result = {
        input: c.input,
        output: c.output,
        width: meta.width,
        height: meta.height,
        inKB: (inSize / 1024).toFixed(1),
        outKB: (outSize / 1024).toFixed(1),
        reduction: pct + '%'
      };
      
      results.push(result);
      console.log(`OK: ${c.input} (${result.inKB} KB) -> ${c.output} (${result.outKB} KB) [-${pct}%]`);
    } catch (error) {
      console.error(`ERROR: Failed to convert ${c.input}: ${error.message}`);
    }
  }

  // Write results to JSON for next step
  const tasksDir = path.join(__dirname, '../tasks');
  if (!fs.existsSync(tasksDir)) {
    fs.mkdirSync(tasksDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(tasksDir, 'webp-results.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log('\nResults saved to .agents/tasks/webp-results.json');
  console.log(`\nTotal conversions: ${results.length}`);
  
  const totalSaved = results.reduce((sum, r) => {
    const inKB = parseFloat(r.inKB);
    const outKB = parseFloat(r.outKB);
    return sum + (inKB - outKB);
  }, 0);
  
  console.log(`Total storage saved: ${totalSaved.toFixed(2)} KB (${(totalSaved / 1024).toFixed(2)} MB)`);
}

main().catch(e => { 
  console.error('Fatal error:', e); 
  process.exit(1); 
});
