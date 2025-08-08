import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { makeSumMatrix, makeProductMatrix } from "../api/matrixApi.js";
import "../Styles/Tables.css"; 
export default function Tables({ rows = 0, cols = 0 }) {
  const nRows = Math.max(0, Math.floor(Number(rows) || 0));
  const nCols = Math.max(0, Math.floor(Number(cols) || 0));

  if (nRows <= 0 || nCols <= 0) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography color="error">
          Rows and Columns must be positive integers.
        </Typography>
      </Box>
    );
  }

  const sumQuery = useQuery({
    queryKey: ["matrix", "sum", nRows, nCols],
    queryFn: () => makeSumMatrix(nRows, nCols),
    enabled: true,
    staleTime: Infinity,
  });

  const productQuery = useQuery({
    queryKey: ["matrix", "product", nRows, nCols],
    queryFn: () => makeProductMatrix(nRows, nCols),
    enabled: true,
    staleTime: Infinity,
  });

  const renderTable = (title, query) => {
    const { data, isLoading, error } = query;

    return (
      <Paper className="table-paper" elevation={1}>
        <div className="table-header">{title}</div>

        <TableContainer className="mui-table-container">
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell className="header-cell">Indices</TableCell>
                {Array.from({ length: nCols }, (_, c) => (
                  <TableCell key={c} className="index-cell">
                    {c}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={nCols + 1} align="center">
                    <CircularProgress size={24} />
                  </TableCell>
                </TableRow>
              )}

              {error && (
                <TableRow>
                  <TableCell colSpan={nCols + 1} align="center" sx={{ color: "error.main" }}>
                    {String(error?.message || "Error generating table")}
                  </TableCell>
                </TableRow>
              )}

              {!isLoading &&
                !error &&
                (data || []).map((row, rIdx) => (
                  <TableRow key={rIdx}>
                    <TableCell className="index-cell">{rIdx}</TableCell>
                    {row.map((cell, cIdx) => (
                      <TableCell key={cIdx} className="data-cell" sx={{ fontWeight: 700 }}>
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  };

  return (
    <Box className="tables-wrapper">
      {renderTable("Sum of indices (i + j)", sumQuery)}
      {renderTable("Product of indices (i × j)", productQuery)}
    </Box>
  );
}
