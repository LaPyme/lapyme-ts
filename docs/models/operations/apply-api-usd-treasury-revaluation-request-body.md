# ApplyApiUsdTreasuryRevaluationRequestBody

## Example Usage

```typescript
import { ApplyApiUsdTreasuryRevaluationRequestBody } from "lapyme/models/operations";

let value: ApplyApiUsdTreasuryRevaluationRequestBody = {
  month: "<value>",
  expectedPreviewToken: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `month`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `bankAccountId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Omit to include all USD bank accounts, up to 32 per action; select one account for larger organizations. |
| `expectedPreviewToken`                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |