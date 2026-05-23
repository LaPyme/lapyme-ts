# ListApiInventoryResponse

## Example Usage

```typescript
import { ListApiInventoryResponse } from "lapyme/models/operations";

let value: ListApiInventoryResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
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
    },
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://pertinent-opera.info/",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiInventoryListResponse](../../models/api-inventory-list-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |