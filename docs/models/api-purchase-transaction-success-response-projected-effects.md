# ApiPurchaseTransactionSuccessResponseProjectedEffects

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseProjectedEffects } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseProjectedEffects = {
  inventory: {
    willReceiveProducts: false,
    willCreateReceipt: false,
    willIncreaseDirectStock: true,
    willReturnProducts: true,
    willDecreaseDirectStock: true,
    inventoryEffect: "none",
    warehouseId: "2f5b1694-d739-4927-a706-773f7df46c7f",
    productLineCount: 964173,
    totalQuantity: 9610.75,
    purchaseOrderIds: [
      "e770d78b-25ac-4d09-b88e-f0c17a2e418e",
      "d43c5e03-76cb-481f-adc3-aa0c394392b9",
      "9e57d3bc-992e-41f8-950f-16d8ebe5e2a0",
    ],
  },
  accounting: {
    willCreateJournalEntry: true,
    currency: "ARS",
    exchangeRate: 6358.92,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `inventory`                                                                  | [models.ApiSharedObjectb451a3d8de](../models/api-shared-objectb451a3d8de.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `accounting`                                                                 | [models.ApiSharedObjectc482130d79](../models/api-shared-objectc482130d79.md) | :heavy_check_mark:                                                           | N/A                                                                          |