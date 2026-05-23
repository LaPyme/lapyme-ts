# ApiSaleTransactionSuccessResponseInventory

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseInventory } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseInventory = {
  willAffectStock: true,
  warehouseIds: [
    "1e285036-baa7-4a84-9408-379b515179b0",
  ],
  productLineCount: 324663,
  totalQuantity: 5504.91,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `willAffectStock`  | *boolean*          | :heavy_check_mark: | N/A                |
| `warehouseIds`     | *string*[]         | :heavy_check_mark: | N/A                |
| `productLineCount` | *number*           | :heavy_check_mark: | N/A                |
| `totalQuantity`    | *number*           | :heavy_check_mark: | N/A                |