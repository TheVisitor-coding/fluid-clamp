function fluidClamp(
  minSize,
  maxSize,
  minVw,
  maxVw,
  options = {}
) {
  const { unit = 'rem', base = 16, precision = 3 } = options;

  if (minVw === maxVw) {
    throw new Error('minVw et maxVw doivent être différents (division par zéro).');
  }

  const round = (n) => {
    const f = 10 ** precision;
    return Math.round(n * f) / f;
  };

  const toUnit = (px) => (unit === 'rem' ? px / base : px);
  const u = unit; // 'rem' | 'px'

  const slope = (maxSize - minSize) / (maxVw - minVw);
  const intersect = minSize - minVw * slope;

  const min = `${round(toUnit(minSize))}${u}`;
  const max = `${round(toUnit(maxSize))}${u}`;
  const preferred = `${round(toUnit(intersect))}${u} + ${round(slope * 100)}vw`;

  return `clamp(${min}, ${preferred}, ${max})`;
}

module.exports = fluidClamp;