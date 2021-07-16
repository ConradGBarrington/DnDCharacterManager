export function calculateAbilityModifier(ability: number): number {
  return Math.floor((ability - 10) / 2);
}