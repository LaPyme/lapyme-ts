# ApplyApiUsdTreasuryRevaluationData

## Example Usage

```typescript
import { ApplyApiUsdTreasuryRevaluationData } from "lapyme/models/operations";

let value: ApplyApiUsdTreasuryRevaluationData = {
  object: "usd_treasury_revaluation",
  id: "64ba40f3-2a31-4e19-bbd7-23d412bb1dc4",
  month: "<value>",
  postingDate: new Date("2025-06-11"),
  reversalDate: new Date("2026-04-03"),
  currency: "USD",
  functionalCurrency: "ARS",
  rate: 7130.82,
  rateDate: new Date("2024-12-03"),
  previewToken: "<value>",
  accounts: [
    {
      bankAccountId: "e150217d-571c-4951-9483-281893cd3214",
      bankName: "<value>",
      accountName: "<value>",
      nativeBalance: 352926,
      carryingValue: 757901,
      revaluedValue: 342214,
      adjustment: 267039,
      currentValue: 560862,
      previousAdjustment: 682642,
      netChange: 118331,
      status: "adjustment",
      replacesEntryIds: [
        "c688e817-4686-4e6f-9ff5-2b049664487a",
        "14f9c09d-cfea-4249-8f61-a424cbcea65c",
        "acbc1cb1-019b-407e-86c3-6c0a291d0f90",
      ],
      entryId: "9c522307-5dcc-43c6-a1c1-aa25f1ae0796",
      reversalEntryId: "a9adbffc-bc3d-4daa-8f82-79aca386a98f",
    },
  ],
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                    | *"usd_treasury_revaluation"*                                                                                                | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `month`                                                                                                                     | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `postingDate`                                                                                                               | [Date](../../types/rfcdate.md)                                                                                              | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `reversalDate`                                                                                                              | [Date](../../types/rfcdate.md)                                                                                              | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `currency`                                                                                                                  | *"USD"*                                                                                                                     | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `functionalCurrency`                                                                                                        | *"ARS"*                                                                                                                     | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `rate`                                                                                                                      | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `rateDate`                                                                                                                  | [Date](../../types/rfcdate.md)                                                                                              | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `previewToken`                                                                                                              | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `accounts`                                                                                                                  | [operations.ApplyApiUsdTreasuryRevaluationAccount](../../models/operations/apply-api-usd-treasury-revaluation-account.md)[] | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |