# RotateSecretApiWebhookEndpointRequest

## Example Usage

```typescript
import { RotateSecretApiWebhookEndpointRequest } from "lapyme/models/operations";

let value: RotateSecretApiWebhookEndpointRequest = {
  webhookEndpointId: "4995fa18-2a91-48d3-8612-2436ae4df603",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `webhookEndpointId`                                             | *string*                                                        | :heavy_check_mark:                                              | ID del endpoint de webhook                                      |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |