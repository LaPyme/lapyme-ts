# ReportQueryResponse

## Example Usage

```typescript
import { ReportQueryResponse } from "lapyme/models";

let value: ReportQueryResponse = {
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
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `requestId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `success`                                                                 | *true*                                                                    | :heavy_check_mark:                                                        | N/A                                                                       |
| `data`                                                                    | [models.ReportQueryResponseData](../models/report-query-response-data.md) | :heavy_check_mark:                                                        | N/A                                                                       |