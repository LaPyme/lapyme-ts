# CreateApiWebhookEndpointRequest

## Example Usage

```typescript
import { CreateApiWebhookEndpointRequest } from "lapyme/models/operations";

let value: CreateApiWebhookEndpointRequest = {
  idempotencyKey: "<value>",
  body: {
    label: "<value>",
    url: "https://illiterate-armchair.com/",
    enabledEvents: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Clave estable para deduplicar reintentos de la misma operación.                               |
| `body`                                                                                        | [models.ApiWebhookEndpointCreateRequest](../../models/api-webhook-endpoint-create-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |