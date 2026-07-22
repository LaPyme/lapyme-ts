# ApiTreasuryMovementListResponseData

## Example Usage

```typescript
import { ApiTreasuryMovementListResponseData } from "lapyme/models";

let value: ApiTreasuryMovementListResponseData = {
  object: "treasury_movement",
  id: "4bf9154c-0cec-4671-b934-08cd62ac1ca8",
  balanceId: "f011177a-69e1-4e50-bc3a-d1b13cfb75a9",
  balanceType: "bank_account",
  balanceName: "<value>",
  occurredOn: new Date("2024-05-16"),
  amount: 255912,
  currency: "PES",
  movementType: "opening_balance",
  sourceType: "<value>",
  sourceId: "0349eefb-69c1-4b3f-b286-d39c80a6a8c3",
  reference: "<value>",
  description: "suspiciously wherever always hence less",
  visibilityScope: "organization",
  createdAt: new Date("2026-09-03T23:45:49.816Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"treasury_movement"*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balanceId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balanceType`                                                                                 | [models.ApiSharedEnum53162db3eb](../models/api-shared-enum53162db3eb.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balanceName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `occurredOn`                                                                                  | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *"PES"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `movementType`                                                                                | [models.ApiSharedEnumc1c44f3acf](../models/api-shared-enumc1c44f3acf.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibilityScope`                                                                             | [models.ApiSharedEnumd440d6785b](../models/api-shared-enumd440d6785b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |