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
    productLineCount: 361211,
    totalQuantity: 3746.46,
    purchaseOrderIds: [
      "2a880da3-b1c3-42ea-b066-283d50d0fcf1",
      "f5c6378e-0016-4416-bf0b-6e2cb0de1fd4",
      "98388518-9910-410a-862b-388a43f37026",
    ],
  },
  accounting: {
    willCreateJournalEntry: false,
    currency: "PES",
    exchangeRate: 8636.37,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `inventory`                                                                  | [models.ApiSharedObjectdafaa4a9ee](../models/api-shared-objectdafaa4a9ee.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `accounting`                                                                 | [models.ApiSharedObject3c43192c61](../models/api-shared-object3c43192c61.md) | :heavy_check_mark:                                                           | N/A                                                                          |