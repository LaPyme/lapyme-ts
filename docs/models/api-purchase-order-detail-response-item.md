# ApiPurchaseOrderDetailResponseItem

## Example Usage

```typescript
import { ApiPurchaseOrderDetailResponseItem } from "lapyme/models";

let value: ApiPurchaseOrderDetailResponseItem = {
  id: "2b06f13b-adf2-43ee-86a5-ab4c5fe05a62",
  orderedQuantity: 4647.79,
  receivedQuantity: 4503.37,
  expectedUnitCost: 518543,
  product: {
    id: "bf65bcec-fc71-4cbd-a81e-650e4c2588c4",
    name: "<value>",
    sku: null,
    productType: "combo",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    optionNames: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `orderedQuantity`                                                                                       | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `receivedQuantity`                                                                                      | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `expectedUnitCost`                                                                                      | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `product`                                                                                               | [models.ApiPurchaseOrderDetailResponseProduct](../models/api-purchase-order-detail-response-product.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |