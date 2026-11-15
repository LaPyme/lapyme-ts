# PreviewApiUsdTreasuryRevaluationData

## Example Usage

```typescript
import { PreviewApiUsdTreasuryRevaluationData } from "lapyme/models/operations";

let value: PreviewApiUsdTreasuryRevaluationData = {
  object: "usd_treasury_revaluation_preview",
  month: "<value>",
  postingDate: new Date("2025-11-06"),
  reversalDate: new Date("2025-10-29"),
  currency: "USD",
  functionalCurrency: "ARS",
  rate: null,
  rateDate: null,
  previewToken: "<value>",
  accounts: [],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                        | *"usd_treasury_revaluation_preview"*                                                                                            | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `month`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `postingDate`                                                                                                                   | [Date](../../types/rfcdate.md)                                                                                                  | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `reversalDate`                                                                                                                  | [Date](../../types/rfcdate.md)                                                                                                  | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `currency`                                                                                                                      | *"USD"*                                                                                                                         | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `functionalCurrency`                                                                                                            | *"ARS"*                                                                                                                         | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `rate`                                                                                                                          | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `rateDate`                                                                                                                      | [Date](../../types/rfcdate.md)                                                                                                  | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `previewToken`                                                                                                                  | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `accounts`                                                                                                                      | [operations.PreviewApiUsdTreasuryRevaluationAccount](../../models/operations/preview-api-usd-treasury-revaluation-account.md)[] | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |