import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { InputNumber, Popover, Statistic, Switch } from 'antd';
import { round } from 'lodash';

import { CardGrid } from '../Layouts/CardLayout';
import { getAspdFrequency } from '../../utils/aspd';

const MarginDiv = styled.div`
  margin-bottom: 5px;
`;

function CastTime({ castTime }) {
  const [skillCastTime, setSkillCastTime] = useState(0);
  const [equipCastTime, setEquipCastTime] = useState(0);
  const [isSource, setIsSource] = useState(true);

  return (
    <div>
      <p>以此百分比進行變詠減免</p>
      <MarginDiv>
        起源{' '}
        <Switch
          size="small"
          checked={isSource}
          onChange={checked => setIsSource(checked)}
        />
      </MarginDiv>
      <MarginDiv>
        <span>原始變詠 : </span>
        <InputNumber
          size="small"
          min={0}
          max={30}
          value={skillCastTime}
          onChange={setSkillCastTime}
        />
      </MarginDiv>
      <MarginDiv>
        <span>卡裝減免 : </span>
        <InputNumber
          size="small"
          min={0}
          max={100}
          value={equipCastTime}
          onChange={setEquipCastTime}
        />
        %
      </MarginDiv>
      <p>
        最終變詠 :{' '}
        {round(
          skillCastTime *
            (1 - equipCastTime / 100) *
            (isSource ? 0.6 : 1) *
            castTime,
          2
        )}
      </p>
    </div>
  );
}

CastTime.propTypes = {
  castTime: PropTypes.number.isRequired,
};

const getPopoverProps = ({ label, aspd, castTime }) => {
  switch (label) {
    default:
    case 'ASPD':
      return {
        title: 'ASPD',
        content: `Attackspeed/Second：${getAspdFrequency(aspd)}`,
      };

    case 'MaxHP':
      return {
        title: 'Max HP',
        content: 'character max health',
      };

    case 'MaxSP':
      return {
        title: 'Max SP',
        content: 'character max SP',
      };

    case 'ATK':
      return {
        title: 'ATK',
        content: 'value for physical attacks',
      };

    case 'MATK':
      return {
        title: 'MATK',
        content: 'value for magical attacks',
      };

    case 'DEF':
      return {
        title: 'DEF',
        content: (
          <>
            <p>the first is the soft def</p>
            <p>second is hardef [(4000 + def) / (4000 + def * 10)]</p>
          </>
        ),
      };

    case 'MDEF':
      return {
        title: 'MDEF',
        content: (
          <>
            <p>first is softmdef</p>
            <p>second is hardmdef [(1000 + def) / (1000 + def * 10)]</p>
          </>
        ),
      };

    case 'CRI':
      return {
        title: 'CRI',
        content: (
          <>
            <p>the probability of a crit attack</p>
            <p>this is supposed to show real crit chance?</p>
          </>
        ),
      };

    case 'HIT':
      return {
        title: 'HIT',
        content: 'chance to hit an enemy',
      };

    case 'FLEE':
      return {
        title: 'FLEE',
        content: (
          <>
            the former is basic avoid chance, latter is complete avoid rate
            <br />
            calculate the chance based of basic hit and enemy hit rate
            <br />
            direct avoid at complete avoid rate regardles of target hit rate
          </>
        ),
      };

    case 'CastTime':
      return {
        title: 'Cast Time',
        content: <CastTime castTime={castTime} />,
      };
  }
};

function AbilityTip({ label, children, suffix, ...props }) {
  return (
    <CardGrid>
      <Statistic
        title={
          <Popover {...getPopoverProps({ label, ...props })}>{label}</Popover>
        }
        value={children}
        suffix={suffix}
      />
    </CardGrid>
  );
}

AbilityTip.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.node,
};

AbilityTip.defaultProps = {
  suffix: null,
};

export { AbilityTip };
