# ApiTransferDetailResponseData

## Example Usage

```typescript
import { ApiTransferDetailResponseData } from "lapyme/models";

let value: ApiTransferDetailResponseData = {
  object: "stock_transfer",
  id: "7bfd3321-e386-402f-81d3-3504b8ce08dc",
  organizationId: "5672ec1f-0575-4b89-bc9e-09c40772c048",
  sourceWarehouseId: "3fd8a79d-df81-4db5-b307-3aca4ff1a5e2",
  targetWarehouseId: "b590e2f4-2e54-4610-9304-b7cc794adca7",
  transferDate: new Date("2025-09-13T12:11:12.424Z"),
  notes: "<value>",
  status: "in_transit",
  createdAt: new Date("2026-06-18T12:50:15.531Z"),
  updatedAt: new Date("2024-07-24T16:11:22.813Z"),
  createdBy: "baf366fe-0b16-4116-b91f-295dd52ff996",
  updatedBy: "381a93e1-2a6b-4496-bd93-859ebc15e68e",
  sourceWarehouse: {
    id: "7657e0fc-35aa-40f1-9acb-076badc5978d",
    name: "<value>",
  },
  targetWarehouse: {
    id: "e5b92dff-0fc2-4c5f-898e-76dbd68ea865",
    name: "<value>",
  },
  items: [],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                      | *"stock_transfer"*                                                                                            | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `organizationId`                                                                                              | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `sourceWarehouseId`                                                                                           | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `targetWarehouseId`                                                                                           | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `transferDate`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `notes`                                                                                                       | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `status`                                                                                                      | [models.ApiTransferDetailResponseStatus](../models/api-transfer-detail-response-status.md)                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `createdAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `updatedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `createdBy`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `updatedBy`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `sourceWarehouse`                                                                                             | [models.ApiTransferDetailResponseSourceWarehouse](../models/api-transfer-detail-response-source-warehouse.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `targetWarehouse`                                                                                             | [models.ApiTransferDetailResponseTargetWarehouse](../models/api-transfer-detail-response-target-warehouse.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `items`                                                                                                       | [models.ApiTransferDetailResponseItem](../models/api-transfer-detail-response-item.md)[]                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |