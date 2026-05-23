# ApiPurchaseTransactionSuccessResponseInventory

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseInventory } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseInventory = {
  willReceiveProducts: true,
  willCreateReceipt: true,
  willIncreaseDirectStock: true,
  warehouseId: "3f834bf0-fc65-4feb-bb17-a97145e99f83",
  productLineCount: 849090,
  totalQuantity: 8081.51,
  purchaseOrderIds: [],
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