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
    source: "sales",
    dimensions: [
      "<value 1>",
      "<value 2>",
    ],
    measures: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `rows`                                                                                     | [models.Row](../models/row.md)[]                                                           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `totals`                                                                                   | Record<string, *number*>                                                                   | :heavy_check_mark:                                                                         | Totales agregados de todas las filas. Presente solo cuando se envía `includeTotals: true`. |
| `metadata`                                                                                 | [models.Metadata](../models/metadata.md)                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |