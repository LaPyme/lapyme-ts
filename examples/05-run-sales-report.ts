import dotenv from "dotenv";
import { Lapyme } from "lapyme";

dotenv.config();

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_API_KEY"] ?? "",
});

async function main() {
  const report = await lapyme.reports.query({
    source: "sales",
    period: {
      startDate: new Date("2026-05-01"),
      endDate: new Date("2026-05-31"),
    },
    dimensions: ["date"],
    measures: ["total", "count", "units"],
    includeTotals: true,
  });

  console.log({
    requestId: report.result.requestId,
    rows: report.result.data.rows,
    totals: report.result.data.totals,
  });
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
