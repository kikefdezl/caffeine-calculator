import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EntryRow from "./EntryRow";
import { useState } from "react";
import { IconButton } from "@mui/material";
import type { Coffee } from "../types";

type EntryRowsProps = {
  coffees: Coffee[];
  setCoffees: (c: Coffee[]) => void;
};

export default function EntryRows({ coffees, setCoffees }: EntryRowsProps) {
  const [nextId, setNextId] = useState(1);

  const handleAddRow = () => {
    setCoffees([...coffees, { id: nextId, grams: undefined, time: undefined }]);
    setNextId(nextId + 1);
  };

  const handleDeleteRow = (coffee_id: number) => {
    setCoffees(coffees.filter((coffee) => coffee.id !== coffee_id));
  };

  const handleChange = (idx: number, updated: Coffee) => {
    const copied = [...coffees];
    copied[idx] = updated;
    setCoffees(copied);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // vertical center
        gap: 2,
      }}
    >
      {coffees.map((coffee, i) => (
        <EntryRow
          key={coffee.id}
          idx={i}
          data={coffee}
          onChange={handleChange}
          onClickDelete={() => handleDeleteRow(coffee.id)}
        />
      ))}
      <IconButton onClick={handleAddRow}>
        <AddCircleIcon />
      </IconButton>
    </Box>
  );
}
