import { Typography, Box, TextField, IconButton } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs, { Dayjs } from "dayjs";
import type { Coffee } from "../types";
import { timeOfDayToDayJs } from "../time";

type EntryRowProps = {
  idx: number;
  data: Coffee;
  onChange: (idx: number, updated: Coffee) => void;
  onClickDelete: () => void;
};

export default function EntryRow({
  idx,
  data,
  onChange,
  onClickDelete,
}: EntryRowProps) {
  const handleGramsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(idx, { ...data, grams: value === "" ? undefined : Number(value) });
  };

  const handleTimeChange = (newValue: Dayjs | null) => {
    if (!newValue) return;
    const date = newValue.toDate();
    const time = { hour: date.getHours(), minute: date.getMinutes() };
    onChange(idx, { ...data, time: time });
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="h6">{idx + 1}</Typography>
      <TextField
        label="grams"
        value={data.grams ?? ""}
        onChange={handleGramsChange}
        sx={{ width: 100 }}
      />
      <MobileTimePicker
        label="time"
        value={
          data.time ? timeOfDayToDayJs(data.time) : dayjs().hour(9).minute(0)
        }
        onChange={handleTimeChange}
      />
      <IconButton aria-label="delete" onClick={onClickDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
