import { range } from 'lodash';

const maxLevel10 = range(10, 0, -1);

export const acolyteSkills = [
  {
    key: 'BLESSING',
    name: 'BLESSING',
    maxLevel: maxLevel10,
    isToggle: false,
    buffs: maxLevel10.map(level => ({
      level,
      status: { str: level, int: level, dex: level },
    })),
  },
  {
    key: 'INCREASE_AGI',
    name: 'INCREASE_AGI',
    maxLevel: maxLevel10,
    isToggle: false,
    buffs: maxLevel10.map(level => ({ level, status: { agi: level + 2 } })),
  },
  {
    key: 'GLORIA',
    name: 'GLORIA',
    isToggle: true,
    buffs: { luk: 30 },
  },
];
