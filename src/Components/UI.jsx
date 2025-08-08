import React from "react";
import { TextField, Button } from "@mui/material";
import Swal from "sweetalert2";
import "../Styles/UI.css";

export default function UI({ rows, cols, setRows, setCols, onGenerate }) {
 
  const handleGenerate = () => {
    if (rows <= 0 || cols <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Rows and Columns must be positive numbers!",
        confirmButtonColor: "#ff6600",
      });
      return;
    }

    onGenerate();
  };

  return (
    <div className="ui-container">
      <TextField
        type="number"
        label="Row"
        value={rows === null ? "" : rows}
        onChange={(e) =>
          setRows(e.target.value === "" ? null : Number(e.target.value))
        }
        size="small"
        className="animated-input"
      />
      <TextField
        type="number"
        label="Column"
        value={cols === null ? "" : cols}
        onChange={(e) =>
          setCols(e.target.value === "" ? null : Number(e.target.value))
        }
        size="small"
        className="animated-input"
      />
      <Button variant="contained" onClick={handleGenerate}>
        Generate
      </Button>
    </div>
  );
}
