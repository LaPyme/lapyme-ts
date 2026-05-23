# ApiPaymentMethodMutationRequest

## Example Usage

```typescript
import { ApiPaymentMethodMutationRequest } from "lapyme/models";

let value: ApiPaymentMethodMutationRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | [models.ApiSharedEnum377ec234cb](../models/api-shared-enum377ec234cb.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `bankAccountId`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `linkedAccountId`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `feePercentage`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `feeFixed`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `requiresReference`                                                      | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `visibility`                                                             | [models.ApiSharedEnum73bb779813](../models/api-shared-enum73bb779813.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `installmentPlans`                                                       | [models.InstallmentPlan](../models/installment-plan.md)[]                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `isActive`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |