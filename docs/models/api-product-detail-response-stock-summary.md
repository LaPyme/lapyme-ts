# ApiProductDetailResponseStockSummary

## Example Usage

```typescript
import { ApiProductDetailResponseStockSummary } from "lapyme/models";

let value: ApiProductDetailResponseStockSummary = {
  totalQuantity: 4643.89,
  warehouseCount: 778672,
  byWarehouse: [],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `totalQuantity`                                                                                       | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `warehouseCount`                                                                                      | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `byWarehouse`                                                                                         | [models.ApiProductDetailResponseByWarehouse](../models/api-product-detail-response-by-warehouse.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |