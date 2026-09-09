# RotateSecretApiWebhookEndpointResponse

## Example Usage

```typescript
import { RotateSecretApiWebhookEndpointResponse } from "lapyme/models/operations";

let value: RotateSecretApiWebhookEndpointResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "webhook_endpoint",
      id: "f6cb4c35-21f0-4204-9a29-788fef8a4a49",
      label: "<value>",
      url: "https://variable-effector.biz/",
      enabledEvents: [],
      apiVersion: "2026-06-29",
      status: "active",
      ownerType: "connected_app",
      failureCount: 101142,
      lastSuccessAt: new Date("2025-10-31T08:06:31.822Z"),
      lastFailureAt: new Date("2025-04-16T23:01:32.946Z"),
      disabledAt: new Date("2025-04-13T22:12:12.952Z"),
      createdAt: new Date("2025-03-01T22:29:05.159Z"),
      updatedAt: new Date("2026-12-30T08:54:30.535Z"),
      signingSecret: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ApiWebhookEndpointSecretResponse](../../models/api-webhook-endpoint-secret-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |