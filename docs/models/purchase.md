# Purchase

## Example Usage

```typescript
import { Purchase } from "lapyme/models";

let value: Purchase = {
  object: "purchase",
  id: "8056a3c5-de29-431b-a40d-78517de56f61",
  deleted: true,
  stockUndone: false,
  purchaseOrdersAffected: false,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `object`                 | *"purchase"*             | :heavy_check_mark:       | N/A                      |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `deleted`                | *boolean*                | :heavy_check_mark:       | N/A                      |
| `stockUndone`            | *boolean*                | :heavy_check_mark:       | N/A                      |
| `purchaseOrdersAffected` | *boolean*                | :heavy_check_mark:       | N/A                      |