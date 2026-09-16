# ApiWebhookTestResponse

## Example Usage

```typescript
import { ApiWebhookTestResponse } from "lapyme/models";

let value: ApiWebhookTestResponse = {
  requestId: "<id>",
  data: {
    object: "webhook_test",
    id: "f9150fde-6a76-4c83-937d-72e8d172a847",
    webhookEndpointId: "415e15e2-d309-42de-8a78-afa34d6564f0",
    deliveryId: "45702125-1e10-4735-891b-0e06f88e7622",
    status: "pending",
    createdAt: new Date("2024-11-30T20:40:16.642Z"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ApiWebhookTestResponseData](../models/api-webhook-test-response-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |