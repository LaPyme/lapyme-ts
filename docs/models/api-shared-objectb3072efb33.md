# ApiSharedObjectb3072efb33

## Example Usage

```typescript
import { ApiSharedObjectb3072efb33 } from "lapyme/models";

let value: ApiSharedObjectb3072efb33 = {
  object: "stock_transfer",
  id: "237d6c14-ac45-48ef-9c77-e79edf19f0ce",
  organizationId: "83a985d0-8670-4f4a-9207-5d0e8563954f",
  sourceWarehouseId: "9e05522f-836f-4cc6-a993-44868c2ee602",
  targetWarehouseId: "08d610d7-5e99-4596-a8c5-7c17024fe7bc",
  transferDate: new Date("2025-04-08T13:57:55.161Z"),
  notes: "<value>",
  status: "closed_with_difference",
  createdAt: new Date("2026-08-30T01:53:49.414Z"),
  updatedAt: new Date("2025-06-22T00:42:27.787Z"),
  createdBy: "d019d85e-e923-4dd8-8167-cf7ab37b7978",
  updatedBy: "03336954-2543-42e2-81d2-9d9cd74570a9",
  sourceWarehouse: {
    id: "bea67aa9-4cab-4290-aa26-8749e7435e10",
    name: "<value>",
  },
  targetWarehouse: {
    id: "38d07e33-fb22-4193-8a9b-253b14e9cce9",
    name: "<value>",
  },
  items: [],
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
| `items`                                                                                       | [models.ApiSharedObject5138d6f7d8](../models/api-shared-object5138d6f7d8.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |