# ApiPurchaseOrderReceiptRequest

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptRequest } from "lapyme/models";

let value: ApiPurchaseOrderReceiptRequest = {
  items: [
    {
      productId: "7dd25bd8-5051-447d-87d9-72d511b0d5d3",
      receivedQuantity: 2829.16,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `items`                                                                                             | [models.ApiPurchaseOrderReceiptRequestItem](../models/api-purchase-order-receipt-request-item.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |