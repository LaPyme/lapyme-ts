# ApiInventoryListResponseData

## Example Usage

```typescript
import { ApiInventoryListResponseData } from "lapyme/models";

let value: ApiInventoryListResponseData = {
  warehouse: {
    object: "warehouse",
    id: "63cc75df-5907-4b47-bba6-d9f1dcbe4467",
    name: "<value>",
    address: "490 Turcotte Manor",
    isDefault: true,
    isActive: false,
  },
  items: [
    {
      object: "inventory_item",
      productId: "d37a30d3-ff9f-485f-854b-54a8eda05dd7",
      productName: "<value>",
      sku: "<value>",
      variantOptions: {},
      optionNames: [],
      category: {
        id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
        name: "<value>",
      },
      productType: "service",
      stock: {
        available: 2252.57,
        onHand: 6590.46,
        reserved: 1503.83,
        incoming: 7864.31,
      },
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `warehouse`                                                                            | [models.ApiSharedObjectadcf6da6ce](../models/api-shared-objectadcf6da6ce.md)           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `items`                                                                                | [models.ApiInventoryListResponseItem](../models/api-inventory-list-response-item.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |