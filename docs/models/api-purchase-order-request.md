# ApiPurchaseOrderRequest

## Example Usage

```typescript
import { ApiPurchaseOrderRequest } from "lapyme/models";

let value: ApiPurchaseOrderRequest = {
  supplierId: "72d1409b-21ed-43ac-bd23-96d0115529c8",
  orderDate: new Date("2026-08-15"),
  warehouseId: "bd63a574-58e3-4c8e-9591-462e2c673f79",
  items: [
    {
      productId: "31edbc21-b22c-4b3d-a2a9-24c9fb8a39c9",
      orderedQuantity: 9712.05,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `supplierId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `orderDate`                                                                          | [Date](../types/rfcdate.md)                                                          | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `expectedDate`                                                                       | [Date](../types/rfcdate.md)                                                          | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `warehouseId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `notes`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `items`                                                                              | [models.ApiPurchaseOrderRequestItem](../models/api-purchase-order-request-item.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |