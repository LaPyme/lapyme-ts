# ApiSaleTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willAffectStock: false,
    warehouseIds: [
      "43fdc256-515c-4d3d-8ef0-3ad40dad8dae",
      "e9f57c69-d86c-451e-9435-4fea0a32ab9c",
    ],
    productLineCount: 238397,
    totalQuantity: 3342.15,
  },
  accounting: {
    willCreateSaleEntry: true,
    willCreatePaymentEntry: true,
  },
  fiscal: {
    invoiceStatus: "pending",
  },
  payments: {
    willCreatePayments: false,
    paymentMethodCount: 127107,
    totalAmount: 2536.61,
    pendingAmount: 8341.79,
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