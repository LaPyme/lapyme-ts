# ApiPurchaseOrderReceiptResponseItem

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptResponseItem } from "lapyme/models";

let value: ApiPurchaseOrderReceiptResponseItem = {
  id: "b6171dcb-c496-4bcc-a1ac-083186998a6b",
  orderedQuantity: 4909.42,
  receivedQuantity: 4297.09,
  expectedUnitCost: 927203,
  product: {
    id: "90cffb90-4ed6-42a2-b372-0e37b38357cb",
    name: "<value>",
    sku: "<value>",
    productType: "service",
    variantOptions: {},
    optionNames: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `orderedQuantity`                                                                                         | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `receivedQuantity`                                                                                        | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `expectedUnitCost`                                                                                        | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `product`                                                                                                 | [models.ApiPurchaseOrderReceiptResponseProduct](../models/api-purchase-order-receipt-response-product.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |