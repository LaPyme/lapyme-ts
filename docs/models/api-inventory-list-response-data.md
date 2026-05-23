# ApiInventoryListResponseData

## Example Usage

```typescript
import { ApiInventoryListResponseData } from "lapyme/models";

let value: ApiInventoryListResponseData = {
  warehouse: {
    object: "warehouse",
    id: "cd37a30d-3ff9-4f85-9f54-b54a8eda05dd",
    name: "<value>",
    address: null,
    isDefault: false,
    isActive: true,
  },
  items: [
    {
      object: "inventory_item",
      productId: "dd7299b9-e21d-4db7-aa72-0b71b7050e26",
      productName: "<value>",
      sku: "<value>",
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
      },
      optionNames: [
        "<value 1>",
      ],
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
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `warehouse`                                                                                    | [models.ApiInventoryListResponseWarehouse](../models/api-inventory-list-response-warehouse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `items`                                                                                        | [models.ApiInventoryListResponseItem](../models/api-inventory-list-response-item.md)[]         | :heavy_check_mark:                                                                             | N/A                                                                                            |