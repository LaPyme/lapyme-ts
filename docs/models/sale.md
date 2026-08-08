# Sale

## Example Usage

```typescript
import { Sale } from "lapyme/models";

let value: Sale = {
  saleId: "0ccd686c-7650-4381-a54c-ab4acdfcc31e",
  customerId: "4d8f777f-6223-4371-9034-3cb67aec1cbc",
  voucherType: "<value>",
  pointOfSaleId: "2862b77a-1037-4dac-867a-1468d9eaadbb",
  invoiceNumber: 568737,
  formattedInvoiceNumber: "<value>",
  invoiceStatus: "pending",
  invoiceDate: new Date("2026-06-13"),
  dueDate: new Date("2025-11-18"),
  currency: "Singapore Dollar",
  subtotal: 371782,
  taxAmount: 678216,
  total: 430890,
  exemptAmount: 150125,
  nonTaxedAmount: 563132,
  tributesAmount: 403025,
  discountAmount: 447651,
  balance: 7716.61,
  createdAt: new Date("2026-02-19T18:39:18.979Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `saleId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
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