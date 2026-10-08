# PauseApiWebhookEndpointRequest

## Example Usage

```typescript
import { PauseApiWebhookEndpointRequest } from "lapyme/models/operations";

let value: PauseApiWebhookEndpointRequest = {
  webhookEndpointId: "ec42fa49-95a9-4834-8056-aaba4cc3cc6f",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `webhookEndpointId`                                             | *string*                                                        | :heavy_check_mark:                                              | ID del endpoint de webhook                                      |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |