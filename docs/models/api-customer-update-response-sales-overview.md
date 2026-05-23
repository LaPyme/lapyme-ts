# ApiCustomerUpdateResponseSalesOverview

## Example Usage

```typescript
import { ApiCustomerUpdateResponseSalesOverview } from "lapyme/models";

let value: ApiCustomerUpdateResponseSalesOverview = {
  pendingBalance: 59.66,
  salesCount: 98308,
  totalSales: 7084.37,
  recentSales: [
    {
      id: "600e5850-829d-45b6-8c4a-0aabb6882951",
      voucherType: "<value>",
      invoiceStatus: "<value>",
      invoiceDate: "<value>",
      currency: "CFA Franc BCEAO",
      total: 3921.45,
      formattedInvoiceNumber: "<value>",
      originalSaleId: "<id>",
      createdAt: new Date("2026-10-12T06:29:33.672Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `pendingBalance`                                                                                      | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `salesCount`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `totalSales`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `recentSales`                                                                                         | [models.ApiCustomerUpdateResponseRecentSale](../models/api-customer-update-response-recent-sale.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |