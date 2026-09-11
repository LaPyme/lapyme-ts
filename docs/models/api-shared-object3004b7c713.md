# ApiSharedObject3004b7c713

## Example Usage

```typescript
import { ApiSharedObject3004b7c713 } from "lapyme/models";

let value: ApiSharedObject3004b7c713 = {
  object: "stock_transfer",
  id: "ea51fad0-cbf8-4aab-bb60-45947937ab7c",
  organizationId: "f96672c4-4b5e-460f-8636-e3d5cd2dab64",
  sourceWarehouseId: "fee6d455-c4bf-49fd-a8bd-6e51bd5e3f20",
  targetWarehouseId: "849f3c3d-9094-4da2-88e5-21090bb65b52",
  transferDate: new Date("2024-03-21T18:04:49.280Z"),
  notes: "<value>",
  status: "completed",
  createdAt: new Date("2026-05-24T13:29:32.260Z"),
  updatedAt: new Date("2025-12-31T14:05:34.678Z"),
  createdBy: "3755e1f5-8c92-4e55-bcc1-db4feeb91959",
  updatedBy: "f65f2196-11c4-4008-a22c-f66423dfbf88",
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
        productType: "product",
        variantOptions: {},
        optionNames: null,
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
| `items`                                                                                       | [models.ApiSharedObject0afbf8c23c](../models/api-shared-object0afbf8c23c.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.ApiSharedObject8a94344083](../models/api-shared-object8a94344083.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |