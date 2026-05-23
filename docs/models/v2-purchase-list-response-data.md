# V2PurchaseListResponseData

## Example Usage

```typescript
import { V2PurchaseListResponseData } from "lapyme/models";

let value: V2PurchaseListResponseData = {
  id: "ebcc1dcc-4f9e-4059-b928-8f7cc0ba17b6",
  voucherType: "<value>",
  invoiceDate: "<value>",
  accountDate: null,
  dueDate: "<value>",
  total: 174693,
  balance: 889098,
  warehouseId: null,
  currency: "Czech Koruna",
  exchangeRate: "<value>",
  supplierInvoiceNumber: null,
  createdAt: new Date("2026-02-23T00:12:06.669Z"),
  supplier: {
    id: "f21da369-4d75-4712-83b5-d47d0aa55f86",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `voucherType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoiceDate`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accountDate`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dueDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `exchangeRate`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `supplierInvoiceNumber`                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `supplier`                                                                                    | [models.V2PurchaseListResponseSupplier](../models/v2-purchase-list-response-supplier.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |