# ApiSaleTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willAffectStock: false,
    warehouseIds: [
      "1822a77b-83df-4d4b-afe3-62da423a76c9",
      "90366136-32e7-4153-84c5-1f225205cf88",
      "0334ea8e-4169-47c0-a7b3-903dc4b1f283",
    ],
    productLineCount: 905282,
    totalQuantity: 8770.01,
  },
  accounting: {
    willCreateSaleEntry: false,
    willCreatePaymentEntry: false,
  },
  fiscal: {
    invoiceStatus: "pending",
  },
  payments: {
    willCreatePayments: true,
    paymentMethodCount: 779716,
    totalAmount: 9.3,
    pendingAmount: 1588.85,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `inventory`                                                                  | [models.ApiSharedObject6a71e7888b](../models/api-shared-object6a71e7888b.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `accounting`                                                                 | [models.ApiSharedObject9428e7100c](../models/api-shared-object9428e7100c.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `fiscal`                                                                     | [models.ApiSharedObject3563932f8e](../models/api-shared-object3563932f8e.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `payments`                                                                   | [models.ApiSharedObject8e516a9b19](../models/api-shared-object8e516a9b19.md) | :heavy_check_mark:                                                           | N/A                                                                          |