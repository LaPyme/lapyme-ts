# Transfer

## Example Usage

```typescript
import { Transfer } from "lapyme/models";

let value: Transfer = {
  id: "e00feef3-4490-4896-9443-52c0e831a375",
  organizationId: "654f4a79-b520-4d9c-9a28-1b484f00fff8",
  sourceWarehouseId: "4ac23b51-1c7f-4ff2-b735-0ae87a373f10",
  targetWarehouseId: "ba55cb4d-c00a-4028-96d6-035c58212cbc",
  transferNumber: 701330,
  formattedTransferNumber: "<value>",
  transferDate: new Date("2026-04-17T18:45:23.097Z"),
  notes: "<value>",
  status: "cancelled",
  createdAt: new Date("2026-01-02T16:41:34.974Z"),
  updatedAt: new Date("2024-07-21T11:44:23.338Z"),
  createdBy: "<value>",
  updatedBy: "<value>",
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
      id: "c77142db-8fad-410d-9425-dc90260cbb18",
      productId: "d98c35a5-9776-4e86-ba81-9c49078f2157",
      quantity: 5536.45,
      receivedQuantity: 3970.32,
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
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `transferNumber`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `formattedTransferNumber`                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `transferDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnumc66b046f05](../models/api-shared-enumc66b046f05.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject13f8ed82da](../models/api-shared-object13f8ed82da.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |