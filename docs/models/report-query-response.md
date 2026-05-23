# ReportQueryResponse

## Example Usage

```typescript
import { ReportQueryResponse } from "lapyme/models";

let value: ReportQueryResponse = {
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
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `requestId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `data`                                                                    | [models.ReportQueryResponseData](../models/report-query-response-data.md) | :heavy_check_mark:                                                        | N/A                                                                       |