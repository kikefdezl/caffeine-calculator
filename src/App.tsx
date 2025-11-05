import { Container, Typography } from "@mui/material";
import EntryRows from "./components/EntryRows";
import type { Coffee } from "./types";
import { useState } from "react";
import CoffeeChart from "./components/CoffeeChart";

import calculateCaffeine from "./services/caffeineCalculator";

function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([
    { id: 0, grams: undefined, time: undefined },
  ]);

  const caffeineData = calculateCaffeine(coffees);

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography variant="h1" sx={{ mt: 12 }}>
        Caffeine Calculator
      </Typography>
      <Typography>
        Enter your daily coffee consumption to see how much is in your body
        along the day!
      </Typography>
      <EntryRows coffees={coffees} setCoffees={setCoffees} />
      <CoffeeChart caffeineData={caffeineData} />
    </Container>
  );
}

export default App;
