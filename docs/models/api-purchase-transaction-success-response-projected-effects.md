# ApiPurchaseTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willReceiveProducts: true,
    willCreateReceipt: true,
    willIncreaseDirectStock: false,
    warehouseId: null,
    productLineCount: 655924,
    totalQuantity: 2619.4,
    purchaseOrderIds: [
      "1d0dc4d2-e4e0-4c6b-80bf-72f95e997d05",
    ],
  },
  accounting: {
    willCreateJournalEntry: false,
    currency: "PES",
    exchangeRate: 5184.31,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `inventory`                                                                  | [models.ApiSharedObjectdafaa4a9ee](../models/api-shared-objectdafaa4a9ee.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `accounting`                                                                 | [models.ApiSharedObject3c43192c61](../models/api-shared-object3c43192c61.md) | :heavy_check_mark:                                                           | N/A                                                                          |