# GetApiWebhookEndpointResponse

## Example Usage

```typescript
import { GetApiWebhookEndpointResponse } from "lapyme/models/operations";

let value: GetApiWebhookEndpointResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "webhook_endpoint",
      id: "96e89f1a-76a6-4cc4-bf15-db5be7aea665",
      label: "<value>",
      url: "https://stormy-numeric.name/",
      enabledEvents: [
        "order.completed",
      ],
      apiVersion: "2026-06-29",
      status: "paused",
      ownerType: "organization",
      failureCount: 247217,
      lastSuccessAt: null,
      lastFailureAt: null,
      disabledAt: new Date("2025-07-06T13:50:47.257Z"),
      createdAt: new Date("2024-04-24T04:36:08.825Z"),
      updatedAt: new Date("2024-05-16T02:12:46.854Z"),
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ApiWebhookEndpointResponse](../../models/api-webhook-endpoint-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |