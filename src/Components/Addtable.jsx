import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { makeSumMatrix, makeProductMatrix } from "../api/matrixApi";
import "../Styles/AddTable.css";

export default function AddTable({ rows, cols }) {
  const [showTable, setShowTable] = useState(false);

  const { data: sumTable } = useQuery({
    queryKey: ["sumTable", rows, cols],
    queryFn: () => makeSumMatrix(rows, cols),
    enabled: !!rows && !!cols,
  });

  const { data: mulTable } = useQuery({
    queryKey: ["mulTable", rows, cols],
    queryFn: () => makeProductMatrix(rows, cols),
    enabled: !!rows && !!cols,
  });

  const handleAddMatrix = () => {
    setShowTable(true);
  };

  const addedTable =
    sumTable && mulTable
      ? sumTable.map((row, i) => row.map((cell, j) => cell + mulTable[i][j]))
      : [];

  return (
    <Box className="add-table-container">
      <Button onClick={handleAddMatrix} variant="contained" className="add-btn">
        Add Matrix
      </Button>

      {showTable && addedTable.length > 0 && (
        <div className="matrix-wrapper">
          <Paper className="table-paper" elevation={2}>
            <div className="table-header">Sum + Product Matrix</div>

            <TableContainer className="mui-table-container">
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell className="header-cell">Indices</TableCell>
                    {Array.from({ length: cols }, (_, c) => (
                      <TableCell key={c} className="index-cell">
                        {c}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {addedTable.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="index-cell">{i}</TableCell>
                      {row.map((cell, j) => (
                        <TableCell
                          key={j}
                          className="data-cell"
                          sx={{ fontWeight: 700 }}
                        >
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography
              sx={{
                color: "#324d3dff",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "1.2rem",
                mt: 2,
              }}
            >
              After adding
            </Typography>
          </Paper>
        </div>
      )}
    </Box>
  );
}
