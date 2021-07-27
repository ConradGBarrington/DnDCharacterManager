export enum ItemType {
  ITEM,
  ARMOR,
  SHIELD,
  WEAPON,
};

export let itemTypeMap: { key: string, value: string | ItemType }[] = [];

for (const itemSet of Object.entries(ItemType)) {
  if (isNaN(Number(itemSet[0]))) {

    let key: string = '';

    switch(itemSet[0]) {
      case 'ITEM': {
        key = 'Item';
        break;
      }
      case 'ARMOR': {
        key = 'Armor';
        break;
      }
      case 'SHIELD': {
        key = 'Shield';
        break;
      }
      case 'WEAPON': {
        key = 'Weapon';
        break;
      }
    }


    itemTypeMap.push({
      key,
      value: itemSet[1],
    });
  }
}
