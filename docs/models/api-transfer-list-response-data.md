# ApiTransferListResponseData

## Example Usage

```typescript
import { ApiTransferListResponseData } from "lapyme/models";

let value: ApiTransferListResponseData = {
  object: "stock_transfer",
  id: "1a818a22-2279-4609-9486-587899e50faf",
  organizationId: "d5f6a0ce-4693-4823-9f16-b4b8ef018572",
  sourceWarehouseId: "bb032681-073b-4ca5-b444-cb65b2fdc66c",
  targetWarehouseId: "fa2bf6e2-8fc9-413f-adfe-57696e434bf6",
  transferDate: new Date("2025-10-18T19:06:55.856Z"),
  notes: "<value>",
  status: "in_transit",
  createdAt: new Date("2024-10-29T17:15:27.097Z"),
  updatedAt: new Date("2026-11-27T20:17:09.288Z"),
  createdBy: "0a52631d-9921-479d-84d7-57bdcf4729c8",
  updatedBy: "1af72164-68d9-4055-9e46-2f8f117c8ce9",
  sourceWarehouse: {
    id: "6381413f-6f41-4e9a-8dbc-3f1856b67913",
    name: "<value>",
  },
  targetWarehouse: {
    id: "569fee8b-8b9c-4815-b077-7e8f357a94fa",
    name: "<value>",
  },
  items: [
    {
      id: "abc8a7b4-6d44-4cb3-89d1-e20f77e90b78",
      productId: "f46423c9-47a3-4775-aa2b-8c34742abc4d",
      quantity: 6040.71,
      receivedQuantity: 1059.41,
      product: {
        id: "74003054-b345-4b67-8fba-42669b438013",
        name: "<value>",
        sku: "<value>",
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
        },
        optionNames: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                  | *"stock_transfer"*                                                                                        | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `organizationId`                                                                                          | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `sourceWarehouseId`                                                                                       | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `targetWarehouseId`                                                                                       | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `transferDate`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `notes`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `status`                                                                                                  | [models.ApiTransferListResponseStatus](../models/api-transfer-list-response-status.md)                    | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `updatedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdBy`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `updatedBy`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `sourceWarehouse`                                                                                         | [models.ApiTransferListResponseSourceWarehouse](../models/api-transfer-list-response-source-warehouse.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `targetWarehouse`                                                                                         | [models.ApiTransferListResponseTargetWarehouse](../models/api-transfer-list-response-target-warehouse.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `items`                                                                                                   | [models.ApiTransferListResponseItem](../models/api-transfer-list-response-item.md)[]                      | :heavy_check_mark:                                                                                        | N/A                                                                                                       |