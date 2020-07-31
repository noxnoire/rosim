import {
  ARCHER,
  BARD,
  DANCER,
  GYPSY,
  HUNTER,
  MAESTRO,
  MINSTREL,
  RANGER,
  SECOND,
  SNIPER,
  THIRD,
  TRANSCENDENT_SECOND,
  WANDERER,
} from './classNames';

export default {
  value: ARCHER,
  label: 'ARCHER',
  children: [
    {
      value: HUNTER,
      type: SECOND,
      label: 'HUNTER',
    },
    {
      value: BARD,
      type: SECOND,
      label: 'BARD',
    },
    {
      value: DANCER,
      type: SECOND,
      label: 'DANCER',
    },
    {
      value: SNIPER,
      type: TRANSCENDENT_SECOND,
      label: 'SNIPER',
    },
    {
      value: MINSTREL,
      type: TRANSCENDENT_SECOND,
      label: 'MINSTREL',
    },
    {
      value: GYPSY,
      type: TRANSCENDENT_SECOND,
      label: 'GYPSY',
    },
    {
      value: RANGER,
      type: THIRD,
      label: 'not on ragna0',
    },
    {
      value: MAESTRO,
      type: THIRD,
      label: 'not on ragna0',
    },
    {
      value: WANDERER,
      type: THIRD,
      label: 'not on ragna0',
    },
  ],
};
