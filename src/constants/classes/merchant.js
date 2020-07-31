import {
  ALCHEMIST,
  BLACKSMITH,
  CREATOR,
  GENETIC,
  MECHANIC,
  MERCHANT,
  SECOND,
  THIRD,
  TRANSCENDENT_SECOND,
  WHITESMITH,
} from './classNames';

export default {
  value: MERCHANT,
  label: 'MERCHANT',
  children: [
    {
      value: BLACKSMITH,
      type: SECOND,
      label: 'BLACKSMITH',
    },
    {
      value: ALCHEMIST,
      type: SECOND,
      label: 'ALCHEMIST',
    },
    {
      value: WHITESMITH,
      type: TRANSCENDENT_SECOND,
      label: 'WHITESMITH',
    },
    {
      value: CREATOR,
      type: TRANSCENDENT_SECOND,
      label: 'CREATOR',
    },
    {
      value: MECHANIC,
      type: THIRD,
      label: 'not on ragna0',
    },
    {
      value: GENETIC,
      type: THIRD,
      label: 'not on ragna0',
    },
  ],
};
