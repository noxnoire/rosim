import {
  ACOLYTE,
  ARCH_BISHOP,
  CHAMPION,
  HIGH_PRIEST,
  MONK,
  PRIEST,
  SECOND,
  SURA,
  THIRD,
  TRANSCENDENT_SECOND,
} from './classNames';

export default {
  value: ACOLYTE,
  label: 'ACOLYTE',
  children: [
    {
      value: PRIEST,
      type: SECOND,
      label: 'PRIEST',
    },
    {
      value: MONK,
      type: SECOND,
      label: 'MONK',
    },
    {
      value: HIGH_PRIEST,
      type: TRANSCENDENT_SECOND,
      label: 'HIGH_PRIEST',
    },
    {
      value: CHAMPION,
      type: TRANSCENDENT_SECOND,
      label: 'CHAMPION',
    },
    {
      value: ARCH_BISHOP,
      type: THIRD,
      label: 'Not on Ragna0',
    },
    {
      value: SURA,
      type: THIRD,
      label: 'Not on Ragna0',
    },
  ],
};
