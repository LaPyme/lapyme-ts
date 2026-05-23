# ApiCustomerDetailResponseSalesOverview

## Example Usage

```typescript
import { ApiCustomerDetailResponseSalesOverview } from "lapyme/models";

let value: ApiCustomerDetailResponseSalesOverview = {
  pendingBalance: 6912.05,
  salesCount: 407134,
  totalSales: 4771.48,
  recentSales: [],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `pendingBalance`                                                                                      | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `salesCount`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `totalSales`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `recentSales`                                                                                         | [models.ApiCustomerDetailResponseRecentSale](../models/api-customer-detail-response-recent-sale.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |