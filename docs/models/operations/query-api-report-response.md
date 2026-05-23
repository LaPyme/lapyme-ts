# QueryApiReportResponse

## Example Usage

```typescript
import { QueryApiReportResponse } from "lapyme/models/operations";

let value: QueryApiReportResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: {
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
      totals: {
        "key": 708.07,
        "key1": 4600.88,
        "key2": 7753.74,
      },
      metadata: {
        source: "inventory",
        dimensions: [
          "<value 1>",
          "<value 2>",
        ],
        measures: [
          "<value 1>",
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