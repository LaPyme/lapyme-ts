# AssistantReportResponse

## Example Usage

```typescript
import { AssistantReportResponse } from "lapyme/models";

let value: AssistantReportResponse = {
  requestId: "<id>",
  data: {
    summary: "<value>",
    report: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    chart: {
      "key": "<value>",
    },
    reporting: {},
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `requestId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `data`                                                                            | [models.AssistantReportResponseData](../models/assistant-report-response-data.md) | :heavy_check_mark:                                                                | N/A                                                                               |