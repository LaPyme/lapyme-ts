# ApiSharedObject3734fb4ff5

## Example Usage

```typescript
import { ApiSharedObject3734fb4ff5 } from "lapyme/models";

let value: ApiSharedObject3734fb4ff5 = {
  paymentMethodId: null,
  paymentMethodName: "<value>",
  amount: 64493,
  paymentMethodIcon: "<value>",
  paymentMethodType: "<value>",
  checkNumber: "<value>",
  checkBankName: "<value>",
  checkDueDate: "<value>",
  checkIssuerName: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `paymentMethodId`                                                                 | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `paymentMethodName`                                                               | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `amount`                                                                          | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `reference`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `cardBrand`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `cardBatchNumber`                                                                 | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `cardCouponNumber`                                                                | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `cardInstallmentPlanCode`                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `notes`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `feeAmount`                                                                       | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `actualProcessorFeeAmount`                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | Costo real reconocido al registrar la cobranza. null indica que no fue informado. |
| `feePercentageApplied`                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `feeFixedApplied`                                                                 | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `netAmount`                                                                       | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `checkId`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `check`                                                                           | [models.ApiSharedObject323339fd8f](../models/api-shared-object323339fd8f.md)      | :heavy_minus_sign:                                                                | Expanded current check data when a check is linked to this split.                 |
| `registerId`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `safeId`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `paymentMethodIcon`                                                               | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `paymentMethodType`                                                               | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `checkNumber`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `checkBankName`                                                                   | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `checkDueDate`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `checkIssuerName`                                                                 | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |