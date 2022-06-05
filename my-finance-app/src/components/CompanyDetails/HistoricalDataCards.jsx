import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import data from "../../sampleAPIs/historicalData.json";

export default function HistoricalDataCards({ data }) {
  function createData(date, open, high, low, close, volume) {
    return { date, open, high, low, close, volume };
  }
  if (data === null || data === undefined) {
    return null;
  }

  const numeral = require("numeral");
  const rows = [];
  const shortcutTime = data?.chart?.result[0];
  const shortcutQuotes = shortcutTime?.indicators?.quote[0];

  for (let i = shortcutTime?.timestamp.length - 1; i >= 0; i--) {
    let d = new Date(shortcutTime?.timestamp[i] * 1000);

    rows.push(
      createData(
        d.toDateString(),
        numeral(shortcutQuotes?.open[i]).format("0.00"),
        numeral(shortcutQuotes?.high[i]).format("0.00"),
        numeral(shortcutQuotes?.low[i]).format("0.00"),
        numeral(shortcutQuotes?.close[i]).format("0.00"),
        numeral(shortcutQuotes?.volume[i]).format("0,0")
      )
    );
  }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {Object.keys(data).length === 0 ? (
          ""
        ) : (
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>High</TableCell>
              <TableCell>Low</TableCell>
              <TableCell>Close</TableCell>
              <TableCell>Volume</TableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>{row.open}</TableCell>
              <TableCell>{row.high}</TableCell>
              <TableCell>{row.low}</TableCell>
              <TableCell>{row.close}</TableCell>
              <TableCell>{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
