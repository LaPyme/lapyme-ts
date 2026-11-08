# ApplyApiUsdTreasuryRevaluationRequest

## Example Usage

```typescript
import { ApplyApiUsdTreasuryRevaluationRequest } from "lapyme/models/operations";

let value: ApplyApiUsdTreasuryRevaluationRequest = {
  idempotencyKey: "<value>",
  body: {
    month: "<value>",
    expectedPreviewToken: "<value>",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Clave estable para deduplicar reintentos de la misma operación.                                                                    |
| `body`                                                                                                                             | [operations.ApplyApiUsdTreasuryRevaluationRequestBody](../../models/operations/apply-api-usd-treasury-revaluation-request-body.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |