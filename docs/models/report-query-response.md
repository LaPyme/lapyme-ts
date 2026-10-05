# ReportQueryResponse

## Example Usage

```typescript
import { ReportQueryResponse } from "lapyme/models";

let value: ReportQueryResponse = {
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
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `requestId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `data`                                                                    | [models.ReportQueryResponseData](../models/report-query-response-data.md) | :heavy_check_mark:                                                        | N/A                                                                       |