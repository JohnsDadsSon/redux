import React, { useState } from "react";
import "./Align.css";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { Button } from "@mui/material";
export const Align = () => {
  const alignLeft = () => {};
  return (
    <div className="align">
      <Button onClick={alignLeft}>
        <FormatAlignLeftIcon />
      </Button>
    </div>
  );
};
