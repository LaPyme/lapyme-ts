# ApiPurchaseOrderReceiptRequest

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptRequest } from "lapyme/models";

let value: ApiPurchaseOrderReceiptRequest = {
  items: [
    {
      purchaseOrderItemId: "7dd25bd8-5051-447d-87d9-72d511b0d5d3",
      productId: "4e222821-d941-44c5-9413-4de60482b67a",
      receivedQuantity: 486095,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `items`                                                                                             | [models.ApiPurchaseOrderReceiptRequestItem](../models/api-purchase-order-receipt-request-item.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |