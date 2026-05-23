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
  quantityChange: 6273.81,
  reservedQuantityChange: 4172.64,
  incomingQuantityChange: 6992.23,
  reason: "<value>",
  notes: "<value>",
  createdAt: new Date("2025-08-22T12:23:16.018Z"),
  createdByName: "<value>",
  warehouseName: "<value>",
  targetWarehouseName: "<value>",
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
| `quantityChange`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reservedQuantityChange`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `incomingQuantityChange`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouseName`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `referenceType`                                                                               | [models.ApiSharedEnumed1129741e](../models/api-shared-enumed1129741e.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `referenceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `referenceLabel`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |