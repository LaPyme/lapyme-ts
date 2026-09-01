# ApiPurchaseTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willReceiveProducts: false,
    willCreateReceipt: true,
    willIncreaseDirectStock: false,
    willReturnProducts: true,
    willDecreaseDirectStock: true,
    inventoryEffect: "none",
    warehouseId: "0dc4d2e4-e0c6-4b0b-9f72-f95e997d052a",
    productLineCount: 518431,
    totalQuantity: 6876.38,
    purchaseOrderIds: [
      "92380e15-31f4-4b58-a580-fbf7a7cd4134",
    ],
  },
  accounting: {
    willCreateJournalEntry: true,
    currency: "DOL",
    exchangeRate: 3729.64,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `inventory`                                                                  | [models.ApiSharedObjectb451a3d8de](../models/api-shared-objectb451a3d8de.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `accounting`                                                                 | [models.ApiSharedObject3c43192c61](../models/api-shared-object3c43192c61.md) | :heavy_check_mark:                                                           | N/A                                                                          |