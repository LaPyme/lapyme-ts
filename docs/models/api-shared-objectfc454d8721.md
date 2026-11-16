# ApiSharedObjectfc454d8721

## Example Usage

```typescript
import { ApiSharedObjectfc454d8721 } from "lapyme/models";

let value: ApiSharedObjectfc454d8721 = {
  id: "e52d42a8-1659-47a6-9bd9-d7ecf1d6c8fd",
  productId: "f23ab26b-868a-46c1-9313-2c28aefe64c1",
  quantity: 986.1,
  receivedQuantity: 5011.32,
  rejectedQuantity: 4567.67,
  product: {
    id: "eef8a671-56b7-41cf-99c8-ff9c1962c96b",
    name: "<value>",
    sku: "<value>",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    optionNames: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `productId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `quantity`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `receivedQuantity`                                                           | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `rejectedQuantity`                                                           | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `product`                                                                    | [models.ApiSharedObject5970f757f8](../models/api-shared-object5970f757f8.md) | :heavy_check_mark:                                                           | N/A                                                                          |