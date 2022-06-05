import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import data from "../../../sampleAPIs/BalanceSheet.json";

function createData(label, TTM, oneYear, twoYear, threeYear, fourYear) {
  return { label, TTM, oneYear, twoYear, threeYear, fourYear };
}

const numeral = require("numeral");

const rows = [
  createData(
    "Total revenue",
    numeral(data.timeSeries.trailingTotalRevenue[0].reportedValue.raw / 1000).format("0,0"),
    numeral(data.earnings.financialsChart.yearly.at(-1).revenue.raw / 1000).format("0,0"),
    numeral(data.earnings.financialsChart.yearly.at(-2).revenue.raw / 1000).format("0,0"),
    numeral(data.earnings.financialsChart.yearly.at(-3).revenue.raw / 1000).format("0,0"),
    numeral(data.earnings.financialsChart.yearly.at(-4).revenue.raw / 1000).format("0,0")
  ),
  createData(
    "Cost of revenue",
    numeral(data.timeSeries.trailingCostOfRevenue[0].reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualCostOfRevenue.at(-1).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualCostOfRevenue.at(-2).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualCostOfRevenue.at(-3).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualCostOfRevenue.at(-4).reportedValue.raw / 1000).format("0,0")
  ),
  createData(
    "Gross profit",
    numeral(data.timeSeries.trailingGrossProfit[0].reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualGrossProfit.at(-1).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualGrossProfit.at(-2).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualGrossProfit.at(-3).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualGrossProfit.at(-4).reportedValue.raw / 1000).format("0,0")
  ),
  createData("       ", "", "", "", "", ""),
  createData(`Operating expenses`, "", "", "", "", ""),
  createData(
    "Research development",
    numeral(data.timeSeries.trailingResearchAndDevelopment[0].reportedValue.raw / 1000).format("0,0"),
    numeral(data.incomeStatementHistory.incomeStatementHistory.at(-4).researchDevelopment.raw / 1000).format("0,0"),
    numeral(data.incomeStatementHistory.incomeStatementHistory.at(-3).researchDevelopment.raw / 1000).format("0,0"),
    numeral(data.incomeStatementHistory.incomeStatementHistory.at(-2).researchDevelopment.raw / 1000).format("0,0"),
    numeral(data.incomeStatementHistory.incomeStatementHistory.at(-1).researchDevelopment.raw / 1000).format("0,0")
  ),
  createData(
    "Selling general and administrative",
    numeral(data.timeSeries.trailingSellingGeneralAndAdministration[0].reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualSellingGeneralAndAdministration.at(-1).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualSellingGeneralAndAdministration.at(-2).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualSellingGeneralAndAdministration.at(-3).reportedValue.raw / 1000).format("0,0"),
    numeral(data.timeSeries.annualSellingGeneralAndAdministration.at(-4).reportedValue.raw / 1000).format("0,0")
  ),
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
  const myStyle = { fontWeight: "bold" };

  return (
    <>
      <div style={{ display: "flex", gap: "40px", alignItems: "end" }}>
        <h2 style={{ marginBottom: "0" }}>IncomeStatement</h2>
        <p style={{ marginBottom: "0", fontSize: "12px", color: "gray" }}>All numbers in thousands</p>
      </div>
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
            {rows.map((row, index) => (
              <TableRow key={row.label} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {index === 7 ? (
                  <TableCell component="th" scope="row" style={myStyle}>
                    {row.label}
                  </TableCell>
                ) : (
                  <TableCell component="th" scope="row">
                    {row.label}
                  </TableCell>
                )}
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
