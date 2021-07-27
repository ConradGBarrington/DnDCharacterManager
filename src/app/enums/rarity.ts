export enum Rarity {
  NON_MAGICAL,
  COMMON,
  UNCOMMON,
  RARE,
  VERY_RARE,
  LEGENDARY,
  ARTIFACT
}

export let raritySelectMap: { key: string, value: string | Rarity }[] = [];

for (const raritySet of Object.entries(Rarity)) {
  if (isNaN(Number(raritySet[0]))) {

    let key: string = '';

    switch(raritySet[0]) {
      case 'NON_MAGICAL': {
        key = 'Non-Magical';
        break;
      }
      case 'COMMON': {
        key = 'Common';
        break;
      }
      case 'UNCOMMON': {
        key = 'Uncommon';
        break;
      }
      case 'RARE': {
        key = 'Rare';
        break;
      }
      case 'VERY_RARE': {
        key = 'Very Rare';
        break;
      }
      case 'LEGENDARY': {
        key = 'Legendary';
        break;
      }
      case 'ARTIFACT': {
        key = 'Artifact';
        break;
      }
    }


    raritySelectMap.push({
      key,
      value: raritySet[1],
    });
  }
}
