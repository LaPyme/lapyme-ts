# ApiSharedObject01ba6d4b36

## Example Usage

```typescript
import { ApiSharedObject01ba6d4b36 } from "lapyme/models";

let value: ApiSharedObject01ba6d4b36 = {
  pendingBalance: 6089.5,
  salesCount: 720515,
  totalSales: 1628.35,
  recentSales: [
    {
      id: "8d5bea0e-bf7f-4529-a115-7d696c0662b7",
      voucherType: "<value>",
      invoiceStatus: "<value>",
      invoiceDate: "<value>",
      currency: "Swiss Franc",
      total: 6467.05,
      formattedInvoiceNumber: "<value>",
      originalSaleId: "<id>",
      createdAt: new Date("2024-09-07T07:40:56.051Z"),
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `pendingBalance`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `salesCount`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalSales`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `recentSales`                                                                  | [models.ApiSharedObject56326f33c2](../models/api-shared-object56326f33c2.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |