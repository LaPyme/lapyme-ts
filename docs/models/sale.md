# Sale

## Example Usage

```typescript
import { Sale } from "lapyme/models";

let value: Sale = {
  installments: [],
  nextOpenInstallment: {
    dueDate: new Date("2024-11-19"),
    openAmount: 92845,
  },
  overdueOpenTotal: 762056,
  balanceAboveSchedule: 822945,
  saleId: "686c7650-3815-44ca-ab4a-cdfcc31ead4d",
  invoicePdf: "<value>",
  customerId: "77f62233-7103-443c-ab67-aec1cbc72862",
  voucherType: "<value>",
  pointOfSaleId: "77a1037d-ac67-4a14-b68d-9eaadbb039ba",
  invoiceNumber: 760908,
  formattedInvoiceNumber: "<value>",
  invoiceStatus: "issued",
  invoiceDate: new Date("2025-04-17"),
  dueDate: new Date("2024-06-13"),
  currency: "Pataca",
  subtotal: 403025,
  taxAmount: 447651,
  total: 771661,
  exemptAmount: 712388,
  nonTaxedAmount: 188372,
  tributesAmount: 889,
  discountAmount: 295570,
  balance: 7176.07,
  createdAt: new Date("2026-11-30T04:29:41.442Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `installments`                                                                                | [models.ApiSharedObjecta14661d9be](../models/api-shared-objecta14661d9be.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nextOpenInstallment`                                                                         | [models.ApiSharedObject1112460e21](../models/api-shared-object1112460e21.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `overdueOpenTotal`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balanceAboveSchedule`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `saleId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoicePdf`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `voucherType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pointOfSaleId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoiceNumber`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `formattedInvoiceNumber`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoiceStatus`                                                                               | [models.ApiSharedEnum9ac70a3316](../models/api-shared-enum9ac70a3316.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoiceDate`                                                                                 | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dueDate`                                                                                     | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subtotal`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `exemptAmount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nonTaxedAmount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tributesAmount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discountAmount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |