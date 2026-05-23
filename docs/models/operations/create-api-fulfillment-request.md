# CreateApiFulfillmentRequest

## Example Usage

```typescript
import { CreateApiFulfillmentRequest } from "lapyme/models/operations";

let value: CreateApiFulfillmentRequest = {
  idempotencyKey: "<value>",
  body: {
    fulfillmentOrderId: "f831bf5e-218d-4f1f-878c-ee9442cc996d",
    lines: [],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | Clave estable para deduplicar reintentos de la misma operación.                    |
| `body`                                                                             | [models.ApiOrderFulfillmentRequest](../../models/api-order-fulfillment-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |