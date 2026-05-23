# CreateSaleResponseItem

## Example Usage

```typescript
import { CreateSaleResponseItem } from "lapyme/models";

let value: CreateSaleResponseItem = {
  id: "8ec6409b-d445-4f24-956d-bba5ddf3e49b",
  quantity: 8046.08,
  unitPrice: 1904.57,
  unitCost: 502.26,
  taxRateId: 9650.02,
  discountPercentage: "<value>",
  product: {
    id: "1f5d96d0-5cf8-4597-8043-6f0141ee1955",
    name: "<value>",
    sku: "<value>",
  },
  warehouse: {
    id: "2ea6077b-6aa7-4f40-8b23-a05bc5a44296",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `quantity`                                                                        | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `unitPrice`                                                                       | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `unitCost`                                                                        | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `taxRateId`                                                                       | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `discountPercentage`                                                              | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `product`                                                                         | [models.CreateSaleResponseProduct](../models/create-sale-response-product.md)     | :heavy_check_mark:                                                                | N/A                                                                               |
| `warehouse`                                                                       | [models.CreateSaleResponseWarehouse](../models/create-sale-response-warehouse.md) | :heavy_check_mark:                                                                | N/A                                                                               |