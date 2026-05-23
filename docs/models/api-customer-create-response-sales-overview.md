# ApiCustomerCreateResponseSalesOverview

## Example Usage

```typescript
import { ApiCustomerCreateResponseSalesOverview } from "lapyme/models";

let value: ApiCustomerCreateResponseSalesOverview = {
  pendingBalance: 7327.72,
  salesCount: 487994,
  totalSales: 7438.51,
  recentSales: [
    {
      id: "16d42345-aa65-4eff-a8c7-1d8e1f2676bb",
      voucherType: "<value>",
      invoiceStatus: "<value>",
      invoiceDate: "<value>",
      currency: "Denar",
      total: 2053.78,
      formattedInvoiceNumber: "<value>",
      originalSaleId: "<id>",
      createdAt: new Date("2025-06-13T06:19:49.645Z"),
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
| `recentSales`                                                                                         | [models.ApiCustomerCreateResponseRecentSale](../models/api-customer-create-response-recent-sale.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |