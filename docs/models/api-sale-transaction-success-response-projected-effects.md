# ApiSaleTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willAffectStock: false,
    warehouseIds: [
      "e006673b-6b7a-40d8-8190-6929677cdaf6",
      "77c813f1-7bc9-4a75-af6c-6672dd64813d",
    ],
    productLineCount: 68286,
    totalQuantity: 3190.65,
  },
  accounting: {
    willCreateSaleEntry: false,
    willCreatePaymentEntry: true,
  },
  fiscal: {
    invoiceStatus: "not_required",
  },
  payments: {
    willCreatePayments: false,
    paymentMethodCount: 631396,
    totalAmount: 3899.13,
    pendingAmount: 5394.58,
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