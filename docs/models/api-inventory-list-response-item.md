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
    id: "cc62def4-c0da-48e5-86cd-6c6107f85d3b",
    name: "<value>",
  },
  productType: "combo",
  stock: {
    available: 8691.11,
    onHand: 7284.83,
    reserved: 5794.95,
    incoming: 7579.55,
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `object`                                                                                            | *"inventory_item"*                                                                                  | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `productId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `productName`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sku`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `variantOptions`                                                                                    | Record<string, *string*>                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `optionNames`                                                                                       | *string*[]                                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `category`                                                                                          | [models.ApiInventoryListResponseCategory](../models/api-inventory-list-response-category.md)        | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `productType`                                                                                       | [models.ApiInventoryListResponseProductType](../models/api-inventory-list-response-product-type.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `stock`                                                                                             | [models.Stock](../models/stock.md)                                                                  | :heavy_check_mark:                                                                                  | N/A                                                                                                 |