import type { CaffeineAmount, Coffee } from "../types";
import { timeString, type TimeOfDay } from "../time";

const CAFFEINE_HALF_LIFE_HOURS: number = 5;
const CAFFEINE_PER_GRAM_OF_COFFEE: number = 0.012;

export default function calculateCaffeine(
  coffees: Coffee[],
): Map<TimeOfDay, CaffeineAmount> {
  const coffeeMap = new Map<string, Coffee>();
  coffees.forEach((coffee) => {
    if (coffee.time) {
      coffeeMap.set(timeString(coffee.time), coffee);
    }
  });

  const caffeineDropPerHour = Math.pow(0.5, 1.0 / CAFFEINE_HALF_LIFE_HOURS);
  let caffeine = 0.0;
  const map = new Map<TimeOfDay, CaffeineAmount>();

  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute++) {
        const key = timeString({ hour: hour, minute: minute });
        const coffee = coffeeMap.get(key);
        if (coffee && coffee.grams) {
          caffeine += coffee.grams * CAFFEINE_PER_GRAM_OF_COFFEE;
        }
      }
      caffeine *= caffeineDropPerHour;

      if (day === 6) {
        const timeOfDay = { hour, minute: 0 };
        const caffeineAmount = { milligrams: caffeine * 1000, time: timeOfDay };
        map.set(timeOfDay, caffeineAmount);
      }
    }
  }
  return map;
}
