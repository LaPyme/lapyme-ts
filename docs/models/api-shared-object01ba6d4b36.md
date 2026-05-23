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
      id: "8c1ace56-161b-4c3f-9aa0-2744636683de",
      voucherType: "<value>",
      invoiceStatus: "<value>",
      invoiceDate: "<value>",
      currency: "Kwacha",
      total: 3189.05,
      formattedInvoiceNumber: "<value>",
      originalSaleId: "<id>",
      createdAt: new Date("2026-05-19T21:58:17.161Z"),
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