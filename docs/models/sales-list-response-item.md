# SalesListResponseItem

## Example Usage

```typescript
import { SalesListResponseItem } from "lapyme/models";

let value: SalesListResponseItem = {
  id: "f0851798-f5d2-4158-8b19-b11928e4b708",
  quantity: 2922.64,
  unitPrice: 1505.53,
  unitCost: 3248.12,
  taxRateId: 6877.32,
  discountPercentage: "<value>",
  product: {
    id: "ea02f774-7696-4ad2-aea1-510479de5f92",
    name: "<value>",
    sku: "<value>",
  },
  warehouse: {
    id: "8523fefa-b785-42f4-9b3f-30a9c7587fe9",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `quantity`                                                                      | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `unitPrice`                                                                     | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `unitCost`                                                                      | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `taxRateId`                                                                     | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `discountPercentage`                                                            | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `product`                                                                       | [models.SalesListResponseProduct](../models/sales-list-response-product.md)     | :heavy_check_mark:                                                              | N/A                                                                             |
| `warehouse`                                                                     | [models.SalesListResponseWarehouse](../models/sales-list-response-warehouse.md) | :heavy_check_mark:                                                              | N/A                                                                             |