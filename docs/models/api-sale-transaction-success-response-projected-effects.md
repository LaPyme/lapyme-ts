# ApiSaleTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willAffectStock: true,
    warehouseIds: [
      "2178e60d-4f5d-4f42-a283-3304bcec3a01",
    ],
    productLineCount: 250522,
    totalQuantity: 1606.33,
  },
  accounting: {
    willCreateSaleEntry: true,
    willCreatePaymentEntry: true,
  },
  fiscal: {
    invoiceStatus: "not_required",
  },
  payments: {
    willCreatePayments: false,
    paymentMethodCount: 664715,
    totalAmount: 1494.96,
    pendingAmount: 7808.37,
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `inventory`                                                                                                         | [models.ApiSaleTransactionSuccessResponseInventory](../models/api-sale-transaction-success-response-inventory.md)   | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `accounting`                                                                                                        | [models.ApiSaleTransactionSuccessResponseAccounting](../models/api-sale-transaction-success-response-accounting.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `fiscal`                                                                                                            | [models.Fiscal](../models/fiscal.md)                                                                                | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `payments`                                                                                                          | [models.Payments](../models/payments.md)                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |