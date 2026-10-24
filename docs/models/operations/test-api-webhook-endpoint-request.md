# TestApiWebhookEndpointRequest

## Example Usage

```typescript
import { TestApiWebhookEndpointRequest } from "lapyme/models/operations";

let value: TestApiWebhookEndpointRequest = {
  webhookEndpointId: "c6605d93-41f7-492d-838d-e3ca6e65d8b5",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `webhookEndpointId`                                             | *string*                                                        | :heavy_check_mark:                                              | ID del endpoint de webhook                                      |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |