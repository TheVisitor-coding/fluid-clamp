const fluidClamp  = require('../index.js');

describe('fluidClamp()', () => {
  it('génère un clamp() correct avec les valeurs par défaut (rem)', () => {
    expect(fluidClamp(16, 24, 320, 1280)).toBe(
      'clamp(1rem, 0.833rem + 0.833vw, 1.5rem)'
    );
  });

  it('sort en px quand on le demande', () => {
    expect(fluidClamp(16, 24, 320, 1280, { unit: 'px' })).toBe(
      'clamp(16px, 13.333px + 0.833vw, 24px)'
    );
  });

  it('lève une erreur si minVw === maxVw', () => {
    expect(() => fluidClamp(16, 24, 768, 768)).toThrow('division par zéro');
  });

  it('accepte une pente négative (typo décroissante)', () => {
    expect(() => fluidClamp(24, 16, 320, 1280)).not.toThrow();
  });
});