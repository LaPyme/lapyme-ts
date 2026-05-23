# ApiSharedObject4b29ca9c27

## Example Usage

```typescript
import { ApiSharedObject4b29ca9c27 } from "lapyme/models";

let value: ApiSharedObject4b29ca9c27 = {
  object: "stock_transfer",
  id: "06cd3d2a-d376-4621-a74a-3ae7f2ad5b50",
  organizationId: "db2fc62a-5b23-41bb-83bd-fff99e35e1e5",
  sourceWarehouseId: "6173a10c-3d16-452a-b36b-01c8cdd5b99a",
  targetWarehouseId: "097a8056-8dd9-4617-9a94-9a56cd670823",
  transferDate: new Date("2024-11-12T15:06:00.166Z"),
  notes: "<value>",
  status: "in_transit",
  createdAt: new Date("2024-02-14T17:13:28.076Z"),
  updatedAt: new Date("2026-07-23T11:38:54.024Z"),
  createdBy: "d218a127-6f35-471e-941d-7f1f84e70d75",
  updatedBy: null,
  sourceWarehouse: {
    id: "bea67aa9-4cab-4290-aa26-8749e7435e10",
    name: "<value>",
  },
  targetWarehouse: {
    id: "38d07e33-fb22-4193-8a9b-253b14e9cce9",
    name: "<value>",
  },
  items: [
    {
      id: "bc6c0f00-5d57-4482-a2b5-ef8c76fc95d0",
      productId: "71d87c70-d6e4-4d8d-bd30-8229d33c08a6",
      quantity: 658.07,
      receivedQuantity: 3113.64,
      product: {
        id: "951a1e5d-31df-484a-a5b8-d026b7a1fe6c",
        name: "<value>",
        sku: "<value>",
        variantOptions: {},
        optionNames: [],
      },
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"stock_transfer"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `transferDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnumc66b046f05](../models/api-shared-enumc66b046f05.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObjecte0ffe25841](../models/api-shared-objecte0ffe25841.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |