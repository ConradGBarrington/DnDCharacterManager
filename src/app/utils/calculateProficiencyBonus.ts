export function calculateProficiencyBonus(level: number): number {
  return Math.floor((level - 1) / 4) + 2;
}