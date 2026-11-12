# ApiPurchaseOrderReceiptRequestItem

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptRequestItem } from "lapyme/models";

let value: ApiPurchaseOrderReceiptRequestItem = {
  productId: "fe5a8db1-74d0-4dc9-bee6-d64d79dcb6b8",
  receivedQuantity: 4028.66,
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `purchaseOrderItemId`                                                                                                                                            | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Omit to receive a product that is not on the order. The product is added to the order with ordered quantity 0, and the received quantity must be greater than 0. |
| `productId`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `receivedQuantity`                                                                                                                                               | *number*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |