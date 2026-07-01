# ApiSharedObject180205ecec

## Example Usage

```typescript
import { ApiSharedObject180205ecec } from "lapyme/models";

let value: ApiSharedObject180205ecec = {
  id: "88f900fd-e77a-4814-a696-146a93e5f069",
  saleItemId: "431c2fdf-ce4a-4c5b-b19b-92ac67b37606",
  quantity: 1629.6,
  name: "<value>",
  isCustom: false,
  warehouseId: "dbc11f40-54a7-46f9-b395-88509dfeab69",
  product: {
    id: "7bf5c929-b8b8-4038-9374-8488dddeb340",
    sku: "<value>",
    name: "<value>",
    optionNames: [
      "<value 1>",
      "<value 2>",
    ],
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
    },
    productType: "combo",
    kitUnits: 2602.65,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `saleItemId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `quantity`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `isCustom`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `warehouseId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `product`                                                                    | [models.ApiSharedObject6ab362068d](../models/api-shared-object6ab362068d.md) | :heavy_check_mark:                                                           | N/A                                                                          |