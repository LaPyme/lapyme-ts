# V2PurchasePreviewResponseInventory

## Example Usage

```typescript
import { V2PurchasePreviewResponseInventory } from "lapyme/models";

let value: V2PurchasePreviewResponseInventory = {
  willReceiveProducts: false,
  willCreateReceipt: false,
  willIncreaseDirectStock: true,
  warehouseId: "149d8fcd-3a5d-4d8b-90bb-1588a9727f5a",
  productLineCount: 497288,
  totalQuantity: 6836.64,
  purchaseOrderIds: [
    "28e9c2fa-4e0f-448e-a066-f95c8e00073e",
  ],
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `willReceiveProducts`     | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `willCreateReceipt`       | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `willIncreaseDirectStock` | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `warehouseId`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `productLineCount`        | *number*                  | :heavy_check_mark:        | N/A                       |
| `totalQuantity`           | *number*                  | :heavy_check_mark:        | N/A                       |
| `purchaseOrderIds`        | *string*[]                | :heavy_check_mark:        | N/A                       |