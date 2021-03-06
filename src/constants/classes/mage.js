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
  label: '法師',
  children: [
    {
      value: WIZARD,
      type: SECOND,
      label: '巫師',
    },
    {
      value: SAGE,
      type: SECOND,
      label: '賢者',
    },
    {
      value: HIGH_WIZARD,
      type: TRANSCENDENT_SECOND,
      label: '超魔導師',
    },
    {
      value: PROFESSOR,
      type: TRANSCENDENT_SECOND,
      label: '智者',
    },
    {
      value: WARLOCK,
      type: THIRD,
      label: '咒術師',
    },
    {
      value: SORCERER,
      type: THIRD,
      label: '妖術師',
    },
  ],
};
