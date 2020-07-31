import {
  CRUSADER,
  KNIGHT,
  LORD_KNIGHT,
  PALADIN,
  ROYAL_GUARD,
  RUNE_KNIGHT,
  SECOND,
  SWORDMAN,
  THIRD,
  TRANSCENDENT_SECOND,
} from './classNames';

export default {
  value: SWORDMAN,
  label: 'SWORDMAN',
  children: [
    {
      value: KNIGHT,
      type: SECOND,
      label: 'KNIGHT',
    },
    {
      value: CRUSADER,
      type: SECOND,
      label: 'CRUSADER',
    },
    {
      value: LORD_KNIGHT,
      type: TRANSCENDENT_SECOND,
      label: 'LORD_KNIGHT',
    },
    {
      value: PALADIN,
      type: TRANSCENDENT_SECOND,
      label: 'PALADIN',
    },
    {
      value: RUNE_KNIGHT,
      type: THIRD,
      label: 'not on ragna0',
    },
    {
      value: ROYAL_GUARD,
      type: THIRD,
      label: 'not on ragna0',
    },
  ],
};
