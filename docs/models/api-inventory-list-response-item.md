# ApiInventoryListResponseItem

## Example Usage

```typescript
import { ApiInventoryListResponseItem } from "lapyme/models";

let value: ApiInventoryListResponseItem = {
  object: "inventory_item",
  productId: "5c9495fc-a6c4-413a-ad2b-cd8559394638",
  productName: "<value>",
  sku: "<value>",
  variantOptions: {},
  optionNames: [],
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  productType: "kit",
  stock: {
    available: 2252.57,
    onHand: 6590.46,
    reserved: 1503.83,
    incoming: 7864.31,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | *"inventory_item"*                                                           | :heavy_check_mark:                                                           | N/A                                                                          |
| `productId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `productName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `sku`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `variantOptions`                                                             | Record<string, *string*>                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `optionNames`                                                                | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `category`                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `productType`                                                                | [models.ApiSharedEnumff49232140](../models/api-shared-enumff49232140.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `stock`                                                                      | [models.ApiSharedObject5884d24e45](../models/api-shared-object5884d24e45.md) | :heavy_check_mark:                                                           | N/A                                                                          |