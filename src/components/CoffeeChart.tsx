import type { TimeOfDay } from "../time";
import type { CaffeineAmount } from "../types";
import { BarChart } from "@mui/x-charts";

type BarChartProps = {
  caffeineData: Map<TimeOfDay, CaffeineAmount>;
};

export default function CoffeeChart({ caffeineData }: BarChartProps) {
  const hours = Array.from(caffeineData.keys()).map((time) => time.hour);
  const amounts = Array.from(caffeineData.values()).map(
    (caffeine) => caffeine.milligrams,
  );

  return (
    <BarChart
      xAxis={[
        {
          data: hours,
          label: "hour",
          scaleType: "band",
        },
      ]}
      yAxis={[{
        label: "milligrams"
      }]}
      series={[
        {
          data: amounts,
          label: "Caffeine in bloodstream (mg)",
          color: "#6F4E37",
        },
      ]}
      height={300}
      width={800}
    />
  );
}
