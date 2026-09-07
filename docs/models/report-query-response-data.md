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
      ],
      labels: [
        "<value 1>",
      ],
      measures: {},
    },
  ],
  totals: {},
  metadata: {
    source: "inventory",
    dimensions: [
      "<value 1>",
      "<value 2>",
    ],
    measures: [
      "<value 1>",
    ],
    reportingCurrency: "ARS",
    rateBasis: "functional_ars",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `rows`                                                                            | [models.Row](../models/row.md)[]                                                  | :heavy_check_mark:                                                                | N/A                                                                               |
| `totals`                                                                          | Record<string, *number*>                                                          | :heavy_check_mark:                                                                | Aggregated totals for all rows. Present only when `includeTotals: true` is sent.  |
| `metadata`                                                                        | [models.ReportQueryResponseMetadata](../models/report-query-response-metadata.md) | :heavy_check_mark:                                                                | N/A                                                                               |