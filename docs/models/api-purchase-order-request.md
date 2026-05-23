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
      productId: "bf171e20-4fbb-4583-a055-adda86aa6496",
      orderedQuantity: 3273.28,
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