# V2PurchaseCommitResponseInventory

## Example Usage

```typescript
import { V2PurchaseCommitResponseInventory } from "lapyme/models";

let value: V2PurchaseCommitResponseInventory = {
  willReceiveProducts: true,
  willCreateReceipt: false,
  willIncreaseDirectStock: false,
  warehouseId: "84ba8dbd-5d2f-4361-8294-6517a35d0128",
  productLineCount: 981465,
  totalQuantity: 9238.43,
  purchaseOrderIds: [
    "6761196b-6cb2-4c7b-b4cd-d4fdd83f66f1",
    "fe3044c0-a31d-40bc-8dde-6f206a02fde5",
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