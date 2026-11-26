# ApiSaleTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willAffectStock: false,
    warehouseIds: [],
    productLineCount: 973089,
    totalQuantity: 9052.07,
  },
  accounting: {
    willCreateSaleEntry: false,
    willCreatePaymentEntry: true,
  },
  fiscal: {
    invoiceStatus: "not_required",
  },
  payments: {
    willCreatePayments: true,
    paymentMethodCount: 933783,
    totalAmount: 9306.61,
    pendingAmount: 3221.2,
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