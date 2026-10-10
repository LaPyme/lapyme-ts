# DisableApiWebhookEndpointRequest

## Example Usage

```typescript
import { DisableApiWebhookEndpointRequest } from "lapyme/models/operations";

let value: DisableApiWebhookEndpointRequest = {
  webhookEndpointId: "2d7630d9-9212-4710-8af3-56f8b3056111",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `webhookEndpointId`                                             | *string*                                                        | :heavy_check_mark:                                              | ID del endpoint de webhook                                      |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |