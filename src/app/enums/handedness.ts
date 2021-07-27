export enum Handedness {
  ONE_HANDED = 'One-Handed',
  TWO_HANDED = 'Two-Handed',
}

export let handednessSelectMap: { key: string, value: string | Handedness }[] = [];

for (const abilitySet of Object.entries(Handedness)) {
  if (isNaN(Number(abilitySet[0]))) {

    let key: string = '';

    switch(abilitySet[0]) {
      case 'ONE_HANDED': {
        key = 'One-Handed';
        break;
      }
      case 'TWO_HANDED': {
        key = 'Two-Handed';
        break;
      }
    }


    handednessSelectMap.push({
      key,
      value: abilitySet[1],
    });
  }
}