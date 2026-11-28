# ApiAssignPendingLotRequestOnHand

## Example Usage

```typescript
import { ApiAssignPendingLotRequestOnHand } from "lapyme/models";

let value: ApiAssignPendingLotRequestOnHand = {
  code: "<value>",
  quantity: 5756.08,
  target: "on_hand",
  productId: "d23531ad-67bb-479b-a7ab-e64ec11220a3",
  warehouseId: "58e26925-6d39-465c-9d64-300a523d8ddd",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `code`                      | *string*                    | :heavy_check_mark:          | N/A                         |
| `quantity`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `target`                    | *"on_hand"*                 | :heavy_check_mark:          | N/A                         |
| `productId`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `warehouseId`               | *string*                    | :heavy_check_mark:          | N/A                         |
| `expirationDate`            | [Date](../types/rfcdate.md) | :heavy_minus_sign:          | N/A                         |