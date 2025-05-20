// src/runner.js
const fs = require('fs');
const { analyzeLine } = require('./analyzer');

const file = process.argv[2];
if (!file) {
  console.error('Uso: node runner.js <ruta_input.txt>');
  process.exit(1);
}

const input = fs.readFileSync(file, 'utf8')
  .split('\n')
  .filter(Boolean);

input.forEach((line, idx) => {
  console.log(`\n>>> Línea ${idx+1}: "${line}"`);
  const res = analyzeLine(line);
  if (!res.ok) {
    console.error('❌ Errores:');
    res.errors.forEach(e => console.error('  ' + e));
  } else {
    console.log('✅ Interpretación:');
    console.dir(res.fields, { depth: null });
  }
});
