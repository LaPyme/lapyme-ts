# ApiPurchaseOrderWriteResponseItem

## Example Usage

```typescript
import { ApiPurchaseOrderWriteResponseItem } from "lapyme/models";

let value: ApiPurchaseOrderWriteResponseItem = {
  id: "129a7a54-8893-4953-9b94-b551ea2f4a52",
  orderedQuantity: 2023.9,
  receivedQuantity: 811.93,
  expectedUnitCost: 343361,
  product: {
    id: "9e733944-f785-4ec8-95a8-abcc0d5ddc1d",
    name: "<value>",
    sku: "<value>",
    productType: "kit",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
    },
    optionNames: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `orderedQuantity`                                                                                     | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `receivedQuantity`                                                                                    | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `expectedUnitCost`                                                                                    | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `product`                                                                                             | [models.ApiPurchaseOrderWriteResponseProduct](../models/api-purchase-order-write-response-product.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |