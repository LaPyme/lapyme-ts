# StockPerWarehouseListResponseData

## Example Usage

```typescript
import { StockPerWarehouseListResponseData } from "lapyme/models";

let value: StockPerWarehouseListResponseData = {
  id: "c7c4129a-79c3-4534-a930-a8d664253090",
  product: {
    id: "d1d55400-4986-4f1e-8d1e-8f464c9ba670",
    name: "<value>",
    sku: "<value>",
  },
  warehouse: {
    id: "0dd3461c-6bbe-4915-84c1-2f3c099b6203",
    name: "<value>",
  },
  quantity: 3539.41,
  organizationSlug: "<value>",
  createdAt: new Date("2026-04-15T09:21:59.978Z"),
  updatedAt: new Date("2026-06-28T11:50:38.321Z"),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `product`                                                                                                 | [models.StockPerWarehouseListResponseProduct](../models/stock-per-warehouse-list-response-product.md)     | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `warehouse`                                                                                               | [models.StockPerWarehouseListResponseWarehouse](../models/stock-per-warehouse-list-response-warehouse.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `quantity`                                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `organizationSlug`                                                                                        | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `updatedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |