# QueryV2ReportResponse

## Example Usage

```typescript
import { QueryV2ReportResponse } from "lapyme/models/operations";

let value: QueryV2ReportResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    success: true,
    data: {
      rows: [],
      totals: {
        "key": 6885.53,
        "key1": 4074.07,
        "key2": 2960.01,
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
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `headers`                                                           | Record<string, *string*[]>                                          | :heavy_check_mark:                                                  | N/A                                                                 |
| `result`                                                            | [models.ReportQueryResponse](../../models/report-query-response.md) | :heavy_check_mark:                                                  | N/A                                                                 |