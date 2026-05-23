# ApiTransferListResponseItem

## Example Usage

```typescript
import { ApiTransferListResponseItem } from "lapyme/models";

let value: ApiTransferListResponseItem = {
  id: "c02ba0cf-0a0d-421e-86fe-74066b6de15e",
  productId: "a7579a9d-41a6-42f8-a476-9fa79f270322",
  quantity: 5059.32,
  receivedQuantity: 5197.83,
  product: {
    id: "74003054-b345-4b67-8fba-42669b438013",
    name: "<value>",
    sku: "<value>",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `productId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `quantity`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `receivedQuantity`                                                                       | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `product`                                                                                | [models.ApiTransferListResponseProduct](../models/api-transfer-list-response-product.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |