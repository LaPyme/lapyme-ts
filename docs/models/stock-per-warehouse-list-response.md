# StockPerWarehouseListResponse

## Example Usage

```typescript
import { StockPerWarehouseListResponse } from "lapyme/models";

let value: StockPerWarehouseListResponse = {
  success: true,
  data: [
    {
      id: "b5399290-8436-404b-8f9d-69c2f5857535",
      product: {
        id: "d1d55400-4986-4f1e-8d1e-8f464c9ba670",
        name: "<value>",
        sku: "<value>",
      },
      warehouse: {
        id: "0dd3461c-6bbe-4915-84c1-2f3c099b6203",
        name: "<value>",
      },
      quantity: 7900.02,
      organizationSlug: "<value>",
      createdAt: new Date("2024-07-18T17:50:23.512Z"),
      updatedAt: new Date("2024-08-06T03:14:34.315Z"),
    },
  ],
  pagination: {
    page: 5522.22,
    limit: 9688.89,
    total: 8144.05,
    totalPages: 7741.07,
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `data`                                                                                                      | [models.StockPerWarehouseListResponseData](../models/stock-per-warehouse-list-response-data.md)[]           | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `pagination`                                                                                                | [models.StockPerWarehouseListResponsePagination](../models/stock-per-warehouse-list-response-pagination.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |