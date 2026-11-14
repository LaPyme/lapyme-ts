# PreviewApiUsdTreasuryRevaluationAccount

## Example Usage

```typescript
import { PreviewApiUsdTreasuryRevaluationAccount } from "lapyme/models/operations";

let value: PreviewApiUsdTreasuryRevaluationAccount = {
  bankAccountId: "d075118f-6238-4fe0-8111-88a374d40b7a",
  bankName: "<value>",
  accountName: "<value>",
  nativeBalance: 938476,
  carryingValue: 338838,
  revaluedValue: 647184,
  adjustment: 907013,
  currentValue: 722243,
  previousAdjustment: 24440,
  netChange: 890960,
  status: "adjustment",
  replacesEntryIds: [
    "8c73786d-4bd3-42b3-9329-99f056f8a11b",
    "5a907d55-d9aa-4997-b357-18acd0321593",
  ],
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