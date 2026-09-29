# ApiSharedObjectb35a323e54

## Example Usage

```typescript
import { ApiSharedObjectb35a323e54 } from "lapyme/models";

let value: ApiSharedObjectb35a323e54 = {
  object: "quote_line",
  id: "c7a70386-5ad9-4a88-8c5b-48582df5cd55",
  productId: "0137e412-d2c9-4ea3-84f9-60d3fc0df588",
  warehouseId: "6782fdd1-2af7-4319-be94-a998e45108a8",
  quantity: 6418.35,
  unitPrice: 481586,
  discount: {
    type: "percentage",
    value: 169.74,
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
| `discount`                                 | *models.ApiSharedObjectb35a323e54Discount* | :heavy_check_mark:                         | N/A                                        |