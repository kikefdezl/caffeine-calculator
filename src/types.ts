import type { TimeOfDay } from "./time";

export type Coffee = {
  id: number;
  grams: number | undefined;
  time: TimeOfDay | undefined;
};

export type CaffeineAmount = {
  milligrams: number;
  time: TimeOfDay;
};
