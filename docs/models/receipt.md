# Receipt

## Example Usage

```typescript
import { Receipt } from "lapyme/models";

let value: Receipt = {
  object: "receipt",
  id: "<id>",
  purchaseOrderWarehouseId: "1140194c-b6da-43f8-8c66-820fdc4b437a",
  affectedProducts: [],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `object`                                                  | *"receipt"*                                               | :heavy_check_mark:                                        | N/A                                                       |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `purchaseOrderWarehouseId`                                | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `affectedProducts`                                        | [models.AffectedProduct](../models/affected-product.md)[] | :heavy_check_mark:                                        | N/A                                                       |