import React, { Component } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const PrettoSlider = styled(Slider)({
  color: "#CED0FF",
  height: 10,
  width: 350,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#666EF0",
    border: "2px solid #666EF0",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#666EF0",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "70",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}%`;
}

export default function DiscreteSliderMarks(props) {
  return (
    <>
      <Box sx={{ margin: 2 }} />
      <Typography gutterBottom style={{ fontSize: "14px", color: "#989898" }}>
        달성도 {props.value}
      </Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        step={props.step}
        marks={marks}
        defaultValue={0}
        max={100}
        min={0}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}
