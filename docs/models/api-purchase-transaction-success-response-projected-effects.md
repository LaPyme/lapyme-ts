# ApiPurchaseTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willReceiveProducts: true,
    willCreateReceipt: false,
    willIncreaseDirectStock: true,
    willReturnProducts: false,
    willDecreaseDirectStock: false,
    inventoryEffect: "none",
    warehouseId: "2380e153-1f4b-4585-880f-bf7a7cd41349",
    productLineCount: 973767,
    totalQuantity: 3729.64,
    purchaseOrderIds: [
      "1694d739-9277-4067-b73f-7df46c7f9ffd",
      "770d78b2-5acd-4098-b8ef-0c17a2e418ec",
    ],
  },
  accounting: {
    willCreateJournalEntry: true,
    currency: "ARS",
    exchangeRate: 7730.36,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `inventory`                                                                  | [models.ApiSharedObjectb451a3d8de](../models/api-shared-objectb451a3d8de.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `accounting`                                                                 | [models.ApiSharedObjectc482130d79](../models/api-shared-objectc482130d79.md) | :heavy_check_mark:                                                           | N/A                                                                          |