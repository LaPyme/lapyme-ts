# ApiStockTransferSuccessResponseItem

## Example Usage

```typescript
import { ApiStockTransferSuccessResponseItem } from "lapyme/models";

let value: ApiStockTransferSuccessResponseItem = {
  id: "b93385a5-e669-434c-839e-4afbff4a0574",
  productId: "f257aa36-05ee-420e-bfa3-64840e01bbe6",
  quantity: 3208.13,
  receivedQuantity: 2855.38,
  product: {
    id: "305b2545-6b9f-4891-b160-63652ba7e51f",
    name: "<value>",
    sku: "<value>",
    variantOptions: null,
    optionNames: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `productId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `quantity`                                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `receivedQuantity`                                                                                        | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `product`                                                                                                 | [models.ApiStockTransferSuccessResponseProduct](../models/api-stock-transfer-success-response-product.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |