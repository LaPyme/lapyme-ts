# ApiSharedObject8e3feaa104

## Example Usage

```typescript
import { ApiSharedObject8e3feaa104 } from "lapyme/models";

let value: ApiSharedObject8e3feaa104 = {
  id: "ccfdee7e-448c-49c2-8f71-db1a933342ab",
  saleItemId: "491b72f4-0b1c-4310-b715-2da8cb8040a1",
  quantity: 8189.21,
  name: "<value>",
  isCustom: false,
  warehouseId: "58d10b24-3e62-434d-82f3-6d79f7d2ba82",
  product: {
    id: "895206ca-d4af-4163-89c6-25a67cad81d3",
    sku: "<value>",
    name: null,
    optionNames: [
      "<value 1>",
    ],
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    productType: "kit",
    kitUnits: 3521.5,
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
| `product`                                                                    | [models.ApiSharedObjectf03e2ce692](../models/api-shared-objectf03e2ce692.md) | :heavy_check_mark:                                                           | N/A                                                                          |