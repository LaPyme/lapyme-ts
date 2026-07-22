# ApiSaleTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willAffectStock: false,
    warehouseIds: [
      "4bb7be18-22a7-47b8-83df-d4bfe362da42",
      "a76c9b90-3661-4363-82e7-1534c51f2252",
    ],
    productLineCount: 372406,
    totalQuantity: 7853.89,
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
    paymentMethodCount: 5824,
    totalAmount: 1879.15,
    pendingAmount: 2077.06,
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