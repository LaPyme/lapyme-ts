# PrepareApiOrderRequest

## Example Usage

```typescript
import { PrepareApiOrderRequest } from "lapyme/models/operations";

let value: PrepareApiOrderRequest = {
  orderId: "acf82fb5-2300-48f8-b2ff-2356b0ee6e20",
  idempotencyKey: "<value>",
  body: {
    items: [
      {
        orderLineId: "d6db7afa-794b-4615-a9b7-446d67e7c145",
        quantity: 376900,
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `orderId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | ID del pedido                                                              |
| `idempotencyKey`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | Clave estable para deduplicar reintentos de la misma operación.            |
| `body`                                                                     | [models.ApiOrderPrepareRequest](../../models/api-order-prepare-request.md) | :heavy_check_mark:                                                         | N/A                                                                        |