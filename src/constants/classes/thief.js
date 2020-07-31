import {
  ASSASSIN,
  ASSASSIN_CROSS,
  GUILLOTINE_CROSS,
  ROGUE,
  SECOND,
  SHADOW_CHASER,
  STALKER,
  THIEF,
  THIRD,
  TRANSCENDENT_SECOND,
} from './classNames';

export default {
  value: THIEF,
  label: 'THIEF',
  children: [
    {
      value: ASSASSIN,
      type: SECOND,
      label: 'ASSASSIN',
    },
    {
      value: ROGUE,
      type: SECOND,
      label: 'ROGUE',
    },
    {
      value: ASSASSIN_CROSS,
      type: TRANSCENDENT_SECOND,
      label: 'ASSASSIN_CROSS',
    },
    {
      value: STALKER,
      type: TRANSCENDENT_SECOND,
      label: 'STALKER',
    },
    {
      value: GUILLOTINE_CROSS,
      type: THIRD,
      label: 'not on ragna0',
    },
    {
      value: SHADOW_CHASER,
      type: THIRD,
      label: 'not on ragna0',
    },
  ],
};
