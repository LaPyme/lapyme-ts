# ResumeApiWebhookEndpointRequest

## Example Usage

```typescript
import { ResumeApiWebhookEndpointRequest } from "lapyme/models/operations";

let value: ResumeApiWebhookEndpointRequest = {
  webhookEndpointId: "6c11b516-0b0a-41fd-a2ce-832d05b6f204",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `webhookEndpointId`                                             | *string*                                                        | :heavy_check_mark:                                              | ID del endpoint de webhook                                      |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |