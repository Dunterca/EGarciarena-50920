// src/analyzer.js

// Expresiones regulares para los distintos tipos
const RE = {
  predefined:  /^@(yearly|monthly|weekly|daily|hourly|reboot)$/,
  range:       /^(\d+)-(\d+)(?:\/(\d+))?$/,
  step:        /^\*(?:\/(\d+))$|^(\d+)-(\d+)\/(\d+)$/,
  wildcard:    /^\*$/,
  value:       /^(\d+)$/,
};

function parseField(field) {
  // 1) Lista: solo si tiene coma
  if (field.includes(',')) {
    const items = field.split(',').map(item => parseField(item.trim()));
    return { type: 'list', items };
  }
  // 2) Predefinidos
  if (RE.predefined.test(field)) {
    return { type: 'predefined', value: field };
  }
  // 3) Rango
  let m;
  if (m = field.match(RE.range)) {
    return { type: 'range', from: +m[1], to: +m[2], step: m[3]? +m[3] : null };
  }
  // 4) Paso
  if (m = field.match(RE.step)) {
    // "*/N"
    if (m[1]) {
      return { type: 'step', base: { type: 'wildcard' }, step: +m[1] };
    }
    // "A-B/N"
    return {
      type: 'step',
      base: { type: 'range', from: +m[2], to: +m[3], step: null },
      step: +m[4]
    };
  }
  // 5) Comodín
  if (RE.wildcard.test(field)) {
    return { type: 'wildcard' };
  }
  // 6) Valor simple
  if (m = field.match(RE.value)) {
    return { type: 'value', value: +m[1] };
  }
  // Si no cuadra en ninguno:
  throw new Error(`Token inválido: "${field}"`);
}

function analyzeLine(line) {
  const fields = line.trim().split(/\s+/).filter(f => f.length > 0);
  const result = [];
  const errors = [];

  fields.forEach((f, i) => {
    try {
      result.push(parseField(f));
    } catch (e) {
      errors.push(`Campo ${i+1}: ${e.message}`);
    }
  });

  return errors.length
    ? { ok: false, errors }
    : { ok: true, fields: result };
}

module.exports = { analyzeLine };
