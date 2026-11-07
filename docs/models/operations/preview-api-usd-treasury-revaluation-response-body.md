# PreviewApiUsdTreasuryRevaluationResponseBody

Treasury result or immutable replay

## Example Usage

```typescript
import { PreviewApiUsdTreasuryRevaluationResponseBody } from "lapyme/models/operations";

let value: PreviewApiUsdTreasuryRevaluationResponseBody = {
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
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `data`                                                                                                                  | [operations.PreviewApiUsdTreasuryRevaluationData](../../models/operations/preview-api-usd-treasury-revaluation-data.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |