# ApiInventoryMovementListResponseData

## Example Usage

```typescript
import { ApiInventoryMovementListResponseData } from "lapyme/models";

let value: ApiInventoryMovementListResponseData = {
  object: "inventory_movement",
  id: "32354061-60d9-49f9-930d-cc55f638ec64",
  movementType: "<value>",
  quantity: 8242.44,
  balance: 3809.04,
  reservedBalance: 6273.81,
  incomingBalance: 4172.64,
  quantityChange: 6992.23,
  reservedQuantityChange: 3031.89,
  incomingQuantityChange: 7395.45,
  reason: "<value>",
  notes: "<value>",
  createdAt: new Date("2025-08-30T20:25:09.024Z"),
  createdBy: "249c8612-1456-45c5-809e-e898a5b8d108",
  createdByName: "<value>",
  warehouseName: "<value>",
  targetWarehouseName: "<value>",
  otherWarehouseName: "<value>",
  referenceType: "purchase",
  referenceId: "<id>",
  referenceLabel: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"inventory_movement"*                                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `movementType`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reservedBalance`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `incomingBalance`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `quantityChange`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reservedQuantityChange`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `incomingQuantityChange`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouseName`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `otherWarehouseName`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `referenceType`                                                                               | [models.ApiSharedEnumed1129741e](../models/api-shared-enumed1129741e.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `referenceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `referenceLabel`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |