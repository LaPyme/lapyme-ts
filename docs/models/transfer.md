# Transfer

## Example Usage

```typescript
import { Transfer } from "lapyme/models";

let value: Transfer = {
  id: "e00feef3-4490-4896-9443-52c0e831a375",
  organizationId: "654f4a79-b520-4d9c-9a28-1b484f00fff8",
  sourceWarehouseId: "ac23b511-c7ff-4f27-a350-ae87a373f10c",
  targetWarehouseId: "55cb4dc0-0a02-486d-a603-5c58212cbc5b",
  transferNumber: 764399,
  formattedTransferNumber: "<value>",
  transferDate: new Date("2026-10-07T05:51:02.928Z"),
  notes: "<value>",
  status: "draft",
  createdAt: new Date("2026-05-01T04:19:00.004Z"),
  updatedAt: new Date("2026-05-28T11:32:13.191Z"),
  createdBy: "<value>",
  updatedBy: "<value>",
  sourceWarehouse: {
    id: "7aa94cab-290a-4268-8749-e7435e10838d",
    name: "<value>",
  },
  targetWarehouse: {
    id: "e33fb221-93a9-4b25-83b1-4e9cce912575",
    name: "<value>",
  },
  items: [],
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
| `status`                                                                                      | [models.ApiSharedEnum736f0d077b](../models/api-shared-enum736f0d077b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObjectfc454d8721](../models/api-shared-objectfc454d8721.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |