import dayjs, { Dayjs } from "dayjs";

export type TimeOfDay = {
  hour: number;
  minute: number;
};

export function timeOfDayToDayJs(time: TimeOfDay): Dayjs {
  return dayjs().hour(time.hour).minute(time.minute).second(0).millisecond(0);
}

export function timeString(time: TimeOfDay): string {
  return `${time.hour}:${time.minute}`;
}
