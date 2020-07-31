import React from 'react';
import { InputNumber, Popover } from 'antd';

import useStoreContext from '../hooks/useStoreContext';
import { Card, InputField, Label } from '../components/Layouts/CardLayout';
import {
  HpAddMod,
  HpMultiMod,
  SpAddMod,
  SpMultiMod,
} from '../components/Tips/MaxHPSP';
import * as hpspActions from '../actions/hpsp';

const useMaxHPSPStore = () => {
  const [{ hpsp }] = useStoreContext();

  return {
    hpsp,
    updateHpAddMod: hpspActions.useUpdateHpAddMod(),
    updateHpMultiMod: hpspActions.useUpdateHpMultiMod(),
    updateSpAddMod: hpspActions.useUpdateSpAddMod(),
    updateSpMultiMod: hpspActions.useUpdateSpMultiMod(),
  };
};

function MaxHPSP() {
  const {
    hpsp,
    updateHpAddMod,
    updateHpMultiMod,
    updateSpAddMod,
    updateSpMultiMod,
  } = useMaxHPSPStore();

  return (
    <Card title="HP/SP">
      <InputField>
        <Popover title="Max Hp" content={HpAddMod} placement="bottom">
          <Label>Max HP Flat Boost</Label>
        </Popover>
        <InputNumber
          min={-10000}
          max={200000}
          value={hpsp.hpAddMod}
          onChange={updateHpAddMod}
        />
      </InputField>
      <InputField>
        <Popover title="Max Hp" content={HpMultiMod} placement="bottom">
          <Label>Max HP %</Label>
        </Popover>
        <InputNumber
          min={-100}
          max={400}
          value={hpsp.hpMultiMod}
          onChange={updateHpMultiMod}
        />{' '}
        %
      </InputField>
      <InputField>
        <Popover title="Max Sp" content={SpAddMod} placement="bottom">
          <Label>Max SP Flat Boost</Label>
        </Popover>
        <InputNumber
          min={-5000}
          max={10000}
          value={hpsp.spAddMod}
          onChange={updateSpAddMod}
        />
      </InputField>
      <InputField>
        <Popover title="Max Sp" content={SpMultiMod} placement="bottom">
          <Label>Max SP %</Label>
        </Popover>
        <InputNumber
          min={-100}
          max={400}
          value={hpsp.spMultiMod}
          onChange={updateSpMultiMod}
        />{' '}
        %
      </InputField>
    </Card>
  );
}

export default MaxHPSP;
