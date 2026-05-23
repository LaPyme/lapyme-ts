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
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://alarmed-shipper.name",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiSharedObject4b29ca9c27](../models/api-shared-object4b29ca9c27.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `object`                                                                       | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)       | :heavy_check_mark:                                                             | List-envelope discriminator.                                                   |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | Requested list path.                                                           |