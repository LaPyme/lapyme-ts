# ApiPurchaseTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willReceiveProducts: false,
    willCreateReceipt: false,
    willIncreaseDirectStock: true,
    willReturnProducts: false,
    willDecreaseDirectStock: true,
    inventoryEffect: "receive",
    warehouseId: "c8c31d79-9b51-4d61-a57b-055d2a880da3",
    productLineCount: 88701,
    totalQuantity: 7625.58,
    purchaseOrderIds: [],
  },
  accounting: {
    willCreateJournalEntry: true,
    currency: "USD",
    exchangeRate: 6513.28,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `inventory`                                                                  | [models.ApiSharedObjectb451a3d8de](../models/api-shared-objectb451a3d8de.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `accounting`                                                                 | [models.ApiSharedObjectc482130d79](../models/api-shared-objectc482130d79.md) | :heavy_check_mark:                                                           | N/A                                                                          |