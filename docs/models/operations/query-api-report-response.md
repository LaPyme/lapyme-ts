# QueryApiReportResponse

## Example Usage

```typescript
import { QueryApiReportResponse } from "lapyme/models/operations";

let value: QueryApiReportResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      rows: [],
      totals: {},
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
    },
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `headers`                               | Record<string, *string*[]>              | :heavy_check_mark:                      | N/A                                     |
| `result`                                | *operations.QueryApiReportResponseBody* | :heavy_check_mark:                      | N/A                                     |