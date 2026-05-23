# V2PurchasePreviewResponseProjectedEffects

## Example Usage

```typescript
import { V2PurchasePreviewResponseProjectedEffects } from "lapyme/models";

let value: V2PurchasePreviewResponseProjectedEffects = {
  inventory: {
    willReceiveProducts: false,
    willCreateReceipt: false,
    willIncreaseDirectStock: false,
    warehouseId: "d8dcdddc-e40a-427c-9b3d-16dcc8a22fe4",
    productLineCount: 207579,
    totalQuantity: 3991.75,
    purchaseOrderIds: [],
  },
  accounting: {
    willCreateJournalEntry: true,
    currency: "PES",
    exchangeRate: 3333.34,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `inventory`                                                                                        | [models.V2PurchasePreviewResponseInventory](../models/v2-purchase-preview-response-inventory.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `accounting`                                                                                       | [models.V2PurchasePreviewResponseAccounting](../models/v2-purchase-preview-response-accounting.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |