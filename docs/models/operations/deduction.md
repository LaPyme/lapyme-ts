# Deduction

## Example Usage

```typescript
import { Deduction } from "lapyme/models/operations";

let value: Deduction = {
  deductionType: "other",
  amount: 297533,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `deductionType`                                                                                                | [operations.CreateApiSettlementDeductionType](../../models/operations/create-api-settlement-deduction-type.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `amount`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `taxKind`                                                                                                      | [models.ApiSharedEnum78c05c0fb9](../../models/api-shared-enum78c05c0fb9.md)                                    | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `jurisdiction`                                                                                                 | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |