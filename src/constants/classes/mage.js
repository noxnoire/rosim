import {
  HIGH_WIZARD,
  MAGE,
  PROFESSOR,
  SAGE,
  SECOND,
  SORCERER,
  THIRD,
  TRANSCENDENT_SECOND,
  WARLOCK,
  WIZARD,
} from './classNames';

export default {
  value: MAGE,
  label: 'MAGE',
  children: [
    {
      value: WIZARD,
      type: SECOND,
      label: 'WIZARD',
    },
    {
      value: SAGE,
      type: SECOND,
      label: 'SAGE',
    },
    {
      value: HIGH_WIZARD,
      type: TRANSCENDENT_SECOND,
      label: 'HIGH_WIZARD',
    },
    {
      value: PROFESSOR,
      type: TRANSCENDENT_SECOND,
      label: 'PROFESSOR',
    },
    {
      value: WARLOCK,
      type: THIRD,
      label: 'not on ragna0',
    },
    {
      value: SORCERER,
      type: THIRD,
      label: 'not on ragna0',
    },
  ],
};
