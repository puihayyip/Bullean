import React from "react";
import data from "../../../sampleAPIs/BalanceSheet.json";
const numeral = require("numeral");

function IncomeStatement() {
  return (
    <>
      <div style={{ display: "flex", gap: "40px", alignItems: "end" }}>
        <h2 style={{ marginBottom: "0" }}>IncomeStatement</h2>
        <p style={{ marginBottom: "0", fontSize: "12px", color: "gray" }}>All numbers in thousands</p>
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            fontWeight: "bold",
            borderBottom: "1px gray solid ",
          }}
        >
          <p>Breakdown</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
            <p>TTM</p>
            <p>30/10/2021</p>
            <p>30/10/2020</p>
            <p>30/10/2019</p>
            <p>30/10/2018</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px gray solid " }}>
          <p>Total revenue</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
            <p>{numeral(data.timeSeries.trailingTotalRevenue[0].reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.earnings.financialsChart.yearly.at(-1).revenue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.earnings.financialsChart.yearly.at(-2).revenue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.earnings.financialsChart.yearly.at(-3).revenue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.earnings.financialsChart.yearly.at(-4).revenue.raw / 1000).format("0,0")}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px gray solid " }}>
          <p>Cost of revenue</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
            <p>{numeral(data.timeSeries.trailingCostOfRevenue[0].reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualCostOfRevenue.at(-1).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualCostOfRevenue.at(-2).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualCostOfRevenue.at(-3).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualCostOfRevenue.at(-4).reportedValue.raw / 1000).format("0,0")}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px gray solid " }}>
          <p>Gross profit</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
            <p>{numeral(data.timeSeries.trailingGrossProfit[0].reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualGrossProfit.at(-1).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualGrossProfit.at(-2).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualGrossProfit.at(-3).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualGrossProfit.at(-4).reportedValue.raw / 1000).format("0,0")}</p>
          </div>
        </div>
        <br />
        <br />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px gray solid " }}>
          <p>Operating expenses</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px gray solid " }}>
          <p>Research development</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
            <p>{numeral(data.timeSeries.trailingResearchAndDevelopment[0].reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.incomeStatementHistory.incomeStatementHistory.at(-4).researchDevelopment.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.incomeStatementHistory.incomeStatementHistory.at(-3).researchDevelopment.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.incomeStatementHistory.incomeStatementHistory.at(-2).researchDevelopment.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.incomeStatementHistory.incomeStatementHistory.at(-1).researchDevelopment.raw / 1000).format("0,0")}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px gray solid " }}>
          <p>Selling general and administrative</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
            <p>{numeral(data.timeSeries.trailingSellingGeneralAndAdministration[0].reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualSellingGeneralAndAdministration.at(-1).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualSellingGeneralAndAdministration.at(-2).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualSellingGeneralAndAdministration.at(-3).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualSellingGeneralAndAdministration.at(-4).reportedValue.raw / 1000).format("0,0")}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px gray solid " }}>
          <p style={{ fontWeight: "bold" }}>Total operating expenses</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
            <p>{numeral(data.timeSeries.trailingOperatingExpense[0].reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualOperatingExpense.at(-1).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualOperatingExpense.at(-2).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualOperatingExpense.at(-3).reportedValue.raw / 1000).format("0,0")}</p>
            <p>{numeral(data.timeSeries.annualOperatingExpense.at(-4).reportedValue.raw / 1000).format("0,0")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomeStatement;
