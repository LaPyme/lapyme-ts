# ApiInventoryMovementListResponseData

## Example Usage

```typescript
import { ApiInventoryMovementListResponseData } from "lapyme/models";

let value: ApiInventoryMovementListResponseData = {
  lots: [],
  object: "inventory_movement",
  id: "23540616-0d99-4f93-b0dc-c55f638ec647",
  movementType: "<value>",
  quantity: 3809.04,
  balance: 6273.81,
  reservedBalance: 4172.64,
  incomingBalance: 6992.23,
  quantityChange: 3031.89,
  reservedQuantityChange: 7395.45,
  incomingQuantityChange: 5470.04,
  reason: "<value>",
  notes: "<value>",
  createdAt: new Date("2024-05-25T21:17:11.153Z"),
  createdBy: "49c86121-4565-4c50-a9ee-898a5b8d1082",
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
| `lots`                                                                                        | [models.ApiSharedObject04c94b5884](../models/api-shared-object04c94b5884.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
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