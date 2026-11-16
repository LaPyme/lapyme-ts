# WithholdingDelta

## Example Usage

```typescript
import { WithholdingDelta } from "lapyme/models/operations";

let value: WithholdingDelta = {
  taxKind: "income_tax",
  amount: 402501,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `taxKind`                                                                                                                         | [models.ApiSharedEnum78c05c0fb9](../../models/api-shared-enum78c05c0fb9.md)                                                       | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `deductionType`                                                                                                                   | [operations.CreateApiProcessorCorrectionDeductionType](../../models/operations/create-api-processor-correction-deduction-type.md) | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `jurisdiction`                                                                                                                    | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `amount`                                                                                                                          | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |