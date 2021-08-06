export enum SpellLevel {
  CANTRIP = 1,
  LEVEL1 = 2,
  LEVEL2 = 3,
  LEVEL3 = 4,
  LEVEL4 = 5,
  LEVEL5 = 6,
  LEVEL6 = 7,
  LEVEL7 = 8,
  LEVEL8 = 9,
  LEVEL9 = 10,
};

export let spellLevelSelectMap: { key: string, value: string | SpellLevel }[] = [];

for (const spellLevelSet of Object.entries(SpellLevel)) {
  if (isNaN(Number(spellLevelSet[0]))) {

    let key: string = '';

    switch(spellLevelSet[0]) {
      case 'CANTRIP': {
        key = 'Cantrip';
        break;
      }
      case 'LEVEL1': {
        key = 'Level 1';
        break;
      }
      case 'LEVEL2': {
        key = 'Level 2';
        break;
      }
      case 'LEVEL3': {
        key = 'Level 3';
        break;
      }
      case 'LEVEL4': {
        key = 'Level 4';
        break;
      }
      case 'LEVEL5': {
        key = 'Level 5';
        break;
      }
      case 'LEVEL6': {
        key = 'Level 6';
        break;
      }
      case 'LEVEL7': {
        key = 'Level 7';
        break;
      }
      case 'LEVEL8': {
        key = 'Level 8';
        break;
      }
      case 'LEVEL9': {
        key = 'Level 9';
        break;
      }
    }


    spellLevelSelectMap.push({
      key,
      value: spellLevelSet[1],
    });
  }
}