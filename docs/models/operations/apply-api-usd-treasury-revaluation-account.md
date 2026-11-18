# ApplyApiUsdTreasuryRevaluationAccount

## Example Usage

```typescript
import { ApplyApiUsdTreasuryRevaluationAccount } from "lapyme/models/operations";

let value: ApplyApiUsdTreasuryRevaluationAccount = {
  bankAccountId: "f80eab0f-689e-432c-ab54-e98fcd6b1dd1",
  bankName: "<value>",
  accountName: "<value>",
  nativeBalance: 60945,
  carryingValue: 382332,
  revaluedValue: 950595,
  adjustment: 425965,
  currentValue: 783197,
  previousAdjustment: 20760,
  netChange: 5230,
  status: "no_balance",
  replacesEntryIds: [
    "bd67377e-11ae-47dc-98d2-94a8201484d9",
  ],
  entryId: "46b23208-358e-4b97-8805-52b7811feeda",
  reversalEntryId: "859210f5-1252-4768-bac7-58d20a4b7fa5",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `bankAccountId`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `bankName`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `accountName`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `nativeBalance`                                                             | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `carryingValue`                                                             | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `revaluedValue`                                                             | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `adjustment`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `currentValue`                                                              | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `previousAdjustment`                                                        | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `netChange`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `status`                                                                    | [models.ApiSharedEnume890e5308b](../../models/api-shared-enume890e5308b.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `replacesEntryIds`                                                          | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `entryId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `reversalEntryId`                                                           | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |