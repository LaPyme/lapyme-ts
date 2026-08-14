# ApiSharedObject0c1ddc7443

## Example Usage

```typescript
import { ApiSharedObject0c1ddc7443 } from "lapyme/models";

let value: ApiSharedObject0c1ddc7443 = {
  object: "stock_transfer",
  id: "66d4de81-cbfd-4f11-b708-212c4a507e98",
  organizationId: "fb28e508-cd53-4395-b746-df76a4576661",
  sourceWarehouseId: "844c56ab-3871-4e38-9d71-491809460d22",
  targetWarehouseId: "5c07a774-daae-4953-a6ac-e7c16d05a89d",
  transferDate: new Date("2025-05-03T10:48:12.618Z"),
  notes: "<value>",
  status: "closed_with_difference",
  createdAt: new Date("2026-06-27T16:17:23.386Z"),
  updatedAt: new Date("2024-08-26T19:39:08.625Z"),
  createdBy: "21fc9d3b-b168-4a10-934d-2d57c4330cb3",
  updatedBy: "fcc180a6-9d13-45a3-916c-a882c22dc0bb",
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
      rejectedQuantity: 6187.91,
      product: {
        id: "51a1e5d3-1df8-44a5-bb8d-026b7a1fe6ca",
        name: "<value>",
        sku: "<value>",
        variantOptions: null,
        optionNames: [],
      },
    },
  ],
  tags: [],
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
| `status`                                                                                      | [models.ApiSharedEnum736f0d077b](../models/api-shared-enum736f0d077b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject4be9a22f82](../models/api-shared-object4be9a22f82.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.ApiSharedObject8a94344083](../models/api-shared-object8a94344083.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |