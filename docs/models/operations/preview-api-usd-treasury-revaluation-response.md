# PreviewApiUsdTreasuryRevaluationResponse

## Example Usage

```typescript
import { PreviewApiUsdTreasuryRevaluationResponse } from "lapyme/models/operations";

let value: PreviewApiUsdTreasuryRevaluationResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "usd_treasury_revaluation_preview",
      month: "<value>",
      postingDate: new Date("2024-05-14"),
      reversalDate: new Date("2025-05-18"),
      currency: "USD",
      functionalCurrency: "ARS",
      rate: null,
      rateDate: new Date("2026-03-07"),
      previewToken: "<value>",
      accounts: [
        {
          bankAccountId: "0ac385c5-b319-41b1-9701-f2159f9a5592",
          bankName: "<value>",
          accountName: "<value>",
          nativeBalance: 767379,
          carryingValue: 818552,
          revaluedValue: 877706,
          adjustment: 286730,
          currentValue: 384605,
          previousAdjustment: 999186,
          netChange: 560878,
          status: "adjustment",
          replacesEntryIds: [
            "989361e7-71be-4adc-a230-679afe36cb59",
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                | Record<string, *string*[]>                                                                                                               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `result`                                                                                                                                 | [operations.PreviewApiUsdTreasuryRevaluationResponseBody](../../models/operations/preview-api-usd-treasury-revaluation-response-body.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |