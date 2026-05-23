# GetStockPerWarehouseResponse

## Example Usage

```typescript
import { GetStockPerWarehouseResponse } from "lapyme/models/operations";

let value: GetStockPerWarehouseResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    success: false,
    data: [],
    pagination: {
      page: 5522.22,
      limit: 9688.89,
      total: 8144.05,
      totalPages: 7741.07,
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [models.StockPerWarehouseListResponse](../../models/stock-per-warehouse-list-response.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |