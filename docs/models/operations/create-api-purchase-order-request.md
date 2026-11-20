# CreateApiPurchaseOrderRequest

## Example Usage

```typescript
import { CreateApiPurchaseOrderRequest } from "lapyme/models/operations";

let value: CreateApiPurchaseOrderRequest = {
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
| `idempotencyKey`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | Clave estable para deduplicar reintentos de la misma operación.              |
| `body`                                                                       | [models.ApiPurchaseOrderRequest](../../models/api-purchase-order-request.md) | :heavy_check_mark:                                                           | N/A                                                                          |