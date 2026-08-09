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
  currency: "PES",
  nativeAmount: null,
  nativeAmountQuality: "derived",
  functionalAmount: 58148,
  functionalCurrency: "PES",
  functionalAmountOrigin: "rate",
  rate: {
    value: "<value>",
    rateDate: new Date("2024-06-10"),
    source: "bcra",
  },
  movementType: "check_out",
  sourceType: "<value>",
  sourceId: "efb69c1b-3f28-46d3-b9c8-0a6a8c3e7f56",
  reference: "<value>",
  description:
    "lovingly towards embalm mmm since certainly enthusiastically ideal question deduction",
  visibilityScope: "organization",
  createdAt: new Date("2025-01-29T13:12:53.564Z"),
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
| `currency`                                                                                    | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nativeAmount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nativeAmountQuality`                                                                         | [models.ApiSharedEnum714ff181d6](../models/api-shared-enum714ff181d6.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `functionalAmount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `functionalCurrency`                                                                          | *"PES"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `functionalAmountOrigin`                                                                      | [models.ApiSharedEnumf03e06f92c](../models/api-shared-enumf03e06f92c.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rate`                                                                                        | [models.ApiSharedObject45b71eae86](../models/api-shared-object45b71eae86.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `movementType`                                                                                | [models.ApiSharedEnumc1c44f3acf](../models/api-shared-enumc1c44f3acf.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibilityScope`                                                                             | [models.ApiSharedEnumd440d6785b](../models/api-shared-enumd440d6785b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |