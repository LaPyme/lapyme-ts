# ApplyApiUsdTreasuryRevaluationResponse

## Example Usage

```typescript
import { ApplyApiUsdTreasuryRevaluationResponse } from "lapyme/models/operations";

let value: ApplyApiUsdTreasuryRevaluationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "usd_treasury_revaluation",
      id: "965c1e78-35fa-4736-967c-0d612699c027",
      month: "<value>",
      postingDate: new Date("2026-07-22"),
      reversalDate: new Date("2026-08-16"),
      currency: "USD",
      functionalCurrency: "ARS",
      rate: 8929.15,
      rateDate: new Date("2024-11-22"),
      previewToken: "<value>",
      accounts: [],
    },
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                            | Record<string, *string*[]>                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `result`                                                                                                                             | [operations.ApplyApiUsdTreasuryRevaluationResponseBody](../../models/operations/apply-api-usd-treasury-revaluation-response-body.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |