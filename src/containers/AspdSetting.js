import React from 'react';
import { Checkbox, Col, InputNumber, Popover, Radio, Row, Select } from 'antd';
import { find } from 'lodash';

import allWeapons from '../constants/weapons';
import aspdTable from '../constants/aspdTable';
import useStoreContext from '../hooks/useStoreContext';
import { Card, InputField, Label } from '../components/Layouts/CardLayout';
import {
  ENRICH_CELERMINE_JUICE,
  SPARKLING_CANDY,
} from '../constants/aspdAdditional';
import { EquipFixed, EquipMod, SkillMod } from '../components/Tips/ASPD';
import * as aspdActions from '../actions/aspd';

const RadioGroup = Radio.Group;
const { Option } = Select;

const aspdPotionModOptions = [
  { label: 'None', value: 0 },
  { label: 'Concentration Potion', value: 10 },
  { label: 'Awakening Potion', value: 15 },
  { label: 'Berzerk Potion', value: 20 },
];

const additiionalModOptions = [
  { label: '!Enriched celermine juice!', value: ENRICH_CELERMINE_JUICE },
  { label: '!sparkling candy!', value: SPARKLING_CANDY },
];

const useAspdSettingStore = () => {
  const [{ job, aspd }] = useStoreContext();

  const { weapons, lefthand = [] } = find(aspdTable, ['job', job[1]]);

  return {
    aspd,
    usableWeapons: weapons,
    usableLefthand: lefthand,
    updateAspdWeaponId: aspdActions.useUpdateAspdWeaponId(),
    updateAspdLefthandId: aspdActions.useUpdateAspdLefthandId(),
    updateAspdEquipMod: aspdActions.useUpdateAspdEquipMod(),
    updateAspdEquipFixed: aspdActions.useUpdateAspdEquipFixed(),
    updateAspdSkillMod: aspdActions.useUpdateAspdSkillMod(),
    updateAspdPotionMod: aspdActions.useUpdateAspdPotionMod(),
    updateAspdAdditialalMod: aspdActions.useUpdateAspdAdditialalMod(),
  };
};

function AspdSetting() {
  const {
    aspd,
    usableWeapons,
    usableLefthand,
    updateAspdWeaponId,
    updateAspdLefthandId,
    updateAspdEquipMod,
    updateAspdEquipFixed,
    updateAspdSkillMod,
    updateAspdPotionMod,
    updateAspdAdditialalMod,
  } = useAspdSettingStore();

  return (
    <Card title="attackspeed">
      <InputField>
        <Row>
          <Col xs={12}>
            <Label>Main</Label>
            <Select
              defaultActiveFirstOption={false}
              style={{ width: 100 }}
              value={aspd.weaponId}
              onChange={updateAspdWeaponId}
            >
              {usableWeapons.map(({ id }) => (
                <Option key={id} value={id}>
                  {find(allWeapons, { id }).name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={12}>
            <Label>OffHand</Label>
            <Select
              defaultActiveFirstOption={false}
              style={{ width: 100 }}
              value={aspd.lefthandId}
              onChange={updateAspdLefthandId}
              disabled={!find(allWeapons, ['id', aspd.weaponId]).lefthand}
            >
              <Option key={100} value={100}>
                None
              </Option>
              <Option key={101} value={101}>
                Shield
              </Option>
              {usableLefthand.map(({ id }) => (
                <Option key={id} value={id}>
                  {find(allWeapons, { id }).name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </InputField>
      <InputField>
        <Popover title="EquipMod aspd" content={EquipMod}>
          <Label>ASPD Equip Modifier</Label>
        </Popover>
        <InputNumber
          min={-100}
          max={200}
          value={aspd.equipMod}
          onChange={updateAspdEquipMod}
        />{' '}
        %
      </InputField>
      <InputField>
        <Popover title="ASPD Skill Modifier" content={SkillMod}>
          <Label>ASPD Skill Modifier</Label>
        </Popover>
        <InputNumber
          min={0}
          max={200}
          value={aspd.skillMod}
          onChange={updateAspdSkillMod}
        />{' '}
        %
      </InputField>
      <InputField>
        <Popover title="Fixed ASPD" content={EquipFixed}>
          <Label>Fixed ASPD</Label>
        </Popover>
        <InputNumber
          min={0}
          max={20}
          value={aspd.equipFixed}
          onChange={updateAspdEquipFixed}
        />
      </InputField>
      <InputField>
        <RadioGroup
          options={aspdPotionModOptions}
          value={aspd.potionMod}
          onChange={({ target }) => updateAspdPotionMod(target.value)}
        />
      </InputField>
      <InputField>
        <Checkbox.Group
          options={additiionalModOptions}
          onChange={updateAspdAdditialalMod}
        />
      </InputField>
    </Card>
  );
}

export default AspdSetting;
