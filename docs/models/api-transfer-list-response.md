# ApiTransferListResponse

## Example Usage

```typescript
import { ApiTransferListResponse } from "lapyme/models";

let value: ApiTransferListResponse = {
  requestId: "<id>",
  data: [
    {
      object: "stock_transfer",
      id: "ea642590-5c70-425e-9b88-1c38484d8f8c",
      organizationId: "a1b68e25-9e92-4fa4-bf1d-3261b2d04c41",
      sourceWarehouseId: "f37ebba9-fb5c-4483-ab47-bd906733ede0",
      targetWarehouseId: "4c914a82-130d-4498-8d27-807bcf317991",
      transferDate: new Date("2025-08-03T21:51:29.364Z"),
      notes: "<value>",
      status: "completed",
      createdAt: new Date("2025-01-15T13:17:37.936Z"),
      updatedAt: new Date("2025-06-25T16:37:41.562Z"),
      createdBy: "7601cd56-ba46-49fb-92a8-5de7f983d252",
      updatedBy: "25709a4f-ace4-4291-958d-05c67aad8dbb",
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
    },
  ],
  hasMore: false,
  nextCursor: "<value>",
  object: "list",
  url: "https://sleepy-airman.org/",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiTransferListResponseData](../models/api-transfer-list-response-data.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `object`                                                                               | [models.ApiTransferListResponseObject](../models/api-transfer-list-response-object.md) | :heavy_check_mark:                                                                     | List-envelope discriminator.                                                           |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | Requested list path.                                                                   |