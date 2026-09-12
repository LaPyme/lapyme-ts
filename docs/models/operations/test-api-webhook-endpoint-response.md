# TestApiWebhookEndpointResponse

## Example Usage

```typescript
import { TestApiWebhookEndpointResponse } from "lapyme/models/operations";

let value: TestApiWebhookEndpointResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "webhook_test",
      id: "f9150fde-6a76-4c83-937d-72e8d172a847",
      webhookEndpointId: "415e15e2-d309-42de-8a78-afa34d6564f0",
      deliveryId: "45702125-1e10-4735-891b-0e06f88e7622",
      status: "pending",
      createdAt: new Date("2024-11-30T20:40:16.642Z"),
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiWebhookTestResponse](../../models/api-webhook-test-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |