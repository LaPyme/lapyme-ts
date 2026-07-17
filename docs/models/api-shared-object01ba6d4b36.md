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
      id: "c3b90345-f3e8-4d5b-bea0-ebf7f5291157",
      voucherType: "<value>",
      invoiceStatus: "<value>",
      invoiceDate: "<value>",
      currency: "Malaysian Ringgit",
      total: 4090.17,
      formattedInvoiceNumber: "<value>",
      originalSaleId: null,
      createdAt: new Date("2025-04-09T18:14:55.376Z"),
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