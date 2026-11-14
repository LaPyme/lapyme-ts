# ApiPurchaseOrderRequestItem

## Example Usage

```typescript
import { ApiPurchaseOrderRequestItem } from "lapyme/models";

let value: ApiPurchaseOrderRequestItem = {
  productId: "5a27b85c-c028-440e-877a-26d3fe5d73e8",
  orderedQuantity: 4510.06,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `productId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `orderedQuantity`                                                                                   | *number*                                                                                            | :heavy_check_mark:                                                                                  | Greater than 0. An update may keep 0 on a line that already has 0: a product added while receiving. |
| `expectedUnitCost`                                                                                  | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |