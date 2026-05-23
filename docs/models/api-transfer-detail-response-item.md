# ApiTransferDetailResponseItem

## Example Usage

```typescript
import { ApiTransferDetailResponseItem } from "lapyme/models";

let value: ApiTransferDetailResponseItem = {
  id: "1af73989-9024-4f19-89e5-d4f5e0e1ae44",
  productId: "26aad433-e1ae-4326-a03c-48988e23e119",
  quantity: 3589.68,
  receivedQuantity: 4103.24,
  product: {
    id: "d2af4484-7dc0-44ff-8dc3-abdce263b65d",
    name: "<value>",
    sku: "<value>",
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `productId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `quantity`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `receivedQuantity`                                                                           | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `product`                                                                                    | [models.ApiTransferDetailResponseProduct](../models/api-transfer-detail-response-product.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |