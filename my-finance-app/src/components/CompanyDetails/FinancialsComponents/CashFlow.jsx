import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(label, TTM, oneYear, twoYear, threeYear, fourYear) {
  return { label, TTM, oneYear, twoYear, threeYear, fourYear };
}

const rows = [
  createData("Total revenue", 24, 23, 17, 14, 17),
  createData("Cost of revenue", 24, 23, 17, 14, 17),
  createData("Gross profit", 24, 23, 17, 14, 17),
  createData("Operating expenses", "", "", "", "", ""),
  createData("Research development", 24, 23, 17, 14, 17),
  createData("Research development", 24, 23, 17, 14, 17),
  createData("Selling general and administrative", 24, 23, 17, 14, 17),
  createData("Total operating expenses", 24, 23, 17, 14, 17),
  createData("Operating income or loss", 24, 23, 17, 14, 17),
  createData("Interest expense", 24, 23, 17, 14, 17),
  createData("Total other income/expenses net", 24, 23, 17, 14, 17),
  createData("Income before tax", 24, 23, 17, 14, 17),
  createData("Income tax expense", 24, 23, 17, 14, 17),
  createData("Income from continuing operations", 24, 23, 17, 14, 17),
  createData("Net income", 24, 23, 17, 14, 17),
  createData("Net income available to common shareholders", 24, 23, 17, 14, 17),
  createData("Basic EPS", 24, 23, 17, 14, 17),
  createData("Diluted EPS", 24, 23, 17, 14, 17),
  createData("Basic average shares", 24, 23, 17, 14, 17),
  createData("Diluted average shares", 24, 23, 17, 14, 17),
  createData("EBITDA", 24, 23, 17, 14, 17),
];

function IncomeStatement() {
  return (
    <>
      <h2>IncomeStatement</h2>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "900" }}>Breakdown</TableCell>
              <TableCell align="right" style={{ fontWeight: "900" }}>
                TTM
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "900" }}>
                30/10/2021
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "900" }}>
                30/10/2020
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "900" }}>
                30/10/2019
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "900" }}>
                30/10/2018
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.label} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell align="right">{row.TTM}</TableCell>
                <TableCell align="right">{row.oneYear}</TableCell>
                <TableCell align="right">{row.twoYear}</TableCell>
                <TableCell align="right">{row.threeYear}</TableCell>
                <TableCell align="right">{row.fourYear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default IncomeStatement;
