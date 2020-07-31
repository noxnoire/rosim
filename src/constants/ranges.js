import { range } from "lodash";

import { SECOND, THIRD, TRANSCENDENT_SECOND } from "./classes/classNames";
import { getJobType } from "./classes";

const jobLevelMap = {
  [SECOND]: 50,
  [TRANSCENDENT_SECOND]: 70,
  [THIRD]: 60,
};

export const getMaxBaseLevel = (job) =>
  getJobType(job) === TRANSCENDENT_SECOND ? 120 : 99;
export const getMaxJobLevel = (job) => jobLevelMap[getJobType(job)];
export const getMaxStats = (job) =>
  getJobType(job) === TRANSCENDENT_SECOND ? 120 : 99;

export const getBaseLevelRange = (job) =>
  getJobType(job) === THIRD ? range(99, 176) : range(1, 100);
export const getJobLevelRange = (job) => range(1, getMaxJobLevel(job) + 1);
export const getStatsRange = (job) => range(1, getMaxStats(job) + 1);
