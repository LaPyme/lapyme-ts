# CreateApiPurchaseOrderRequest

## Example Usage

```typescript
import { CreateApiPurchaseOrderRequest } from "lapyme/models/operations";

let value: CreateApiPurchaseOrderRequest = {
  idempotencyKey: "<value>",
  body: {
    supplierId: "361b927b-84d1-42c9-a73d-9c67b2505f60",
    orderDate: new Date("2025-11-30"),
    warehouseId: "df8b58ff-ac97-4afe-ad36-c03c55a4fea8",
    items: [
      {
        productId: "bf171e20-4fbb-4583-a055-adda86aa6496",
        orderedQuantity: 3273.28,
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `idempotencyKey`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | Clave estable para deduplicar reintentos de la misma operación.              |
| `body`                                                                       | [models.ApiPurchaseOrderRequest](../../models/api-purchase-order-request.md) | :heavy_check_mark:                                                           | N/A                                                                          |