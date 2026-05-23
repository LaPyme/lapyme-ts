# ApiInventoryListResponse

## Example Usage

```typescript
import { ApiInventoryListResponse } from "lapyme/models";

let value: ApiInventoryListResponse = {
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
  hasMore: false,
  nextCursor: null,
  object: "list",
  url: "https://well-documented-airbus.biz/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.ApiInventoryListResponseData](../models/api-inventory-list-response-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `object`                                                                             | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)             | :heavy_check_mark:                                                                   | List-envelope discriminator.                                                         |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Requested list path.                                                                 |