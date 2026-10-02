# ApiSharedObject0fefcb4ac5

## Example Usage

```typescript
import { ApiSharedObject0fefcb4ac5 } from "lapyme/models";

let value: ApiSharedObject0fefcb4ac5 = {
  object: "quote_line",
  id: "a9e63a87-69da-4aec-8859-bd459637886e",
  productId: "cbcb646a-74df-4064-8d47-44152c3e187b",
  warehouseId: "cd28f7a2-2d66-4517-ae36-e3b692f1ffda",
  quantity: 403.72,
  unitPrice: 103587,
  discount: {
    type: "percentage",
    value: 8584.76,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `object`                                   | *"quote_line"*                             | :heavy_check_mark:                         | N/A                                        |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `productId`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `warehouseId`                              | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `quantity`                                 | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `unitPrice`                                | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `discount`                                 | *models.ApiSharedObject0fefcb4ac5Discount* | :heavy_check_mark:                         | N/A                                        |