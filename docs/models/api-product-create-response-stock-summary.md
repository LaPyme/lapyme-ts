# ApiProductCreateResponseStockSummary

## Example Usage

```typescript
import { ApiProductCreateResponseStockSummary } from "lapyme/models";

let value: ApiProductCreateResponseStockSummary = {
  totalQuantity: 1368.66,
  warehouseCount: 56352,
  byWarehouse: [],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `totalQuantity`                                                                                       | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `warehouseCount`                                                                                      | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `byWarehouse`                                                                                         | [models.ApiProductCreateResponseByWarehouse](../models/api-product-create-response-by-warehouse.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |