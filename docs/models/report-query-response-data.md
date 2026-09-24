# ReportQueryResponseData

## Example Usage

```typescript
import { ReportQueryResponseData } from "lapyme/models";

let value: ReportQueryResponseData = {
  rows: [
    {
      id: "<id>",
      ids: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      labels: [],
      measures: {
        "key": 8605.26,
      },
    },
  ],
  totals: {
    "key": 6595.15,
    "key1": 1009,
  },
  metadata: {
    source: "inventory",
    dimensions: [
      "<value 1>",
      "<value 2>",
    ],
    measures: [],
    reportingCurrency: "USD",
    rateBasis: "treasury_functional_ars_accounting_value",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `rows`                                                                                   | [models.Row](../models/row.md)[]                                                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `totals`                                                                                 | Record<string, *number*>                                                                 | :heavy_check_mark:                                                                       | Aggregated totals for all rows. Present only when `includeTotals: true` is sent.         |
| `totalAmountQuality`                                                                     | Record<string, [models.ApiSharedEnum714ff181d6](../models/api-shared-enum714ff181d6.md)> | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | [models.ReportQueryResponseMetadata](../models/report-query-response-metadata.md)        | :heavy_check_mark:                                                                       | N/A                                                                                      |