# UpdateApiPurchaseOrderRequest

## Example Usage

```typescript
import { UpdateApiPurchaseOrderRequest } from "lapyme/models/operations";

let value: UpdateApiPurchaseOrderRequest = {
  purchaseOrderId: "4ff8b450-b0cf-4614-aaa2-80297f0c36d1",
  idempotencyKey: "<value>",
  body: {
    supplierId: "e9daa098-f521-4bd3-93b9-6f071e432104",
    orderDate: new Date("2024-07-15"),
    warehouseId: "c0656c02-1ca3-4d12-a294-76d9b4cbaccf",
    items: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `purchaseOrderId`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | ID de la orden de compra                                                     |
| `idempotencyKey`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | Clave estable para deduplicar reintentos de la misma operación.              |
| `body`                                                                       | [models.ApiPurchaseOrderRequest](../../models/api-purchase-order-request.md) | :heavy_check_mark:                                                           | N/A                                                                          |