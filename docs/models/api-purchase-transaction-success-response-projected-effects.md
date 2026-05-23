# ApiPurchaseTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willReceiveProducts: false,
    willCreateReceipt: true,
    willIncreaseDirectStock: true,
    warehouseId: null,
    productLineCount: 852377,
    totalQuantity: 4391.22,
    purchaseOrderIds: [
      "b25acd09-88ef-40c1-87a2-e418ecd43c5e",
      "376cb81f-dc3a-4a0c-a394-392b999e57d3",
    ],
  },
  accounting: {
    willCreateJournalEntry: false,
    currency: "DOL",
    exchangeRate: 5742.06,
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `inventory`                                                                                                                 | [models.ApiPurchaseTransactionSuccessResponseInventory](../models/api-purchase-transaction-success-response-inventory.md)   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `accounting`                                                                                                                | [models.ApiPurchaseTransactionSuccessResponseAccounting](../models/api-purchase-transaction-success-response-accounting.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |