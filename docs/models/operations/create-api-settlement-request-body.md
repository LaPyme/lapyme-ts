# CreateApiSettlementRequestBody

## Example Usage

```typescript
import { CreateApiSettlementRequestBody } from "lapyme/models/operations";

let value: CreateApiSettlementRequestBody = {
  bankAccountId: "3996cbbd-59ba-42ab-b060-74b382dbc610",
  settlementDate: new Date("2025-11-03"),
  items: [
    {
      customerPaymentId: "b097b500-55ed-416e-9003-e28849aff654",
      paymentSplitId: "416a03c6-b3c6-4508-8fef-4dcc8a5eb741",
      amount: 367215,
    },
  ],
  deductions: [],
  netDepositAmount: 71259,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bankAccountId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `settlementDate`                                                                              | [Date](../../types/rfcdate.md)                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [operations.CreateApiSettlementItem](../../models/operations/create-api-settlement-item.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deductions`                                                                                  | [operations.Deduction](../../models/operations/deduction.md)[]                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `netDepositAmount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `integrationSource`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `integrationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |