# UpdateApiWebhookEndpointRequest

## Example Usage

```typescript
import { UpdateApiWebhookEndpointRequest } from "lapyme/models/operations";

let value: UpdateApiWebhookEndpointRequest = {
  webhookEndpointId: "9512ae7d-4529-4684-9edb-6f0c40bd5652",
  idempotencyKey: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `webhookEndpointId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | ID del endpoint de webhook                                                                    |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Clave estable para deduplicar reintentos de la misma operación.                               |
| `body`                                                                                        | [models.ApiWebhookEndpointUpdateRequest](../../models/api-webhook-endpoint-update-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |