# V2PurchaseCommitResponseProjectedEffects

## Example Usage

```typescript
import { V2PurchaseCommitResponseProjectedEffects } from "lapyme/models";

let value: V2PurchaseCommitResponseProjectedEffects = {
  inventory: {
    willReceiveProducts: true,
    willCreateReceipt: true,
    willIncreaseDirectStock: false,
    warehouseId: "a6460754-e9ef-42ba-a925-ae305bc8fac5",
    productLineCount: 947017,
    totalQuantity: 1801.76,
    purchaseOrderIds: [
      "657d1a09-224e-4a93-803d-e07b1cd4b1e9",
    ],
  },
  accounting: {
    willCreateJournalEntry: false,
    currency: "DOL",
    exchangeRate: 7264.49,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `inventory`                                                                                      | [models.V2PurchaseCommitResponseInventory](../models/v2-purchase-commit-response-inventory.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `accounting`                                                                                     | [models.V2PurchaseCommitResponseAccounting](../models/v2-purchase-commit-response-accounting.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |