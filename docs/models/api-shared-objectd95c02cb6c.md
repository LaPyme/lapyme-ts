# ApiSharedObjectd95c02cb6c

## Example Usage

```typescript
import { ApiSharedObjectd95c02cb6c } from "lapyme/models";

let value: ApiSharedObjectd95c02cb6c = {
  id: "9e05ca9b-435a-4a6a-8317-bb6755e90fd8",
  productId: "6b28f0c9-d12a-428d-91a9-9d769e3d0863",
  quantity: 3428.63,
  receivedQuantity: 3114.32,
  rejectedQuantity: 9654.01,
  product: {
    id: "83470ede-e551-43c8-8627-4739b7f0dc5c",
    name: "<value>",
    sku: "<value>",
    variantOptions: {
      "key": "<value>",
    },
    optionNames: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `lots`                                                                         | [models.ApiSharedObject04c94b5884](../models/api-shared-object04c94b5884.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `productId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `quantity`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `receivedQuantity`                                                             | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `rejectedQuantity`                                                             | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `product`                                                                      | [models.ApiSharedObject5970f757f8](../models/api-shared-object5970f757f8.md)   | :heavy_check_mark:                                                             | N/A                                                                            |