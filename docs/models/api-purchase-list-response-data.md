# ApiPurchaseListResponseData

## Example Usage

```typescript
import { ApiPurchaseListResponseData } from "lapyme/models";

let value: ApiPurchaseListResponseData = {
  object: "purchase",
  id: "e531c605-9548-4206-8ff4-d5378e8992f1",
  voucherType: "<value>",
  invoiceDate: "<value>",
  accountDate: null,
  dueDate: "<value>",
  total: 31770,
  balance: 226117,
  warehouseId: null,
  currency: "Balboa",
  exchangeRate: "<value>",
  supplierInvoiceNumber: "<value>",
  createdAt: new Date("2024-09-22T00:08:56.190Z"),
  supplier: {
    id: "fd77c624-8fc6-42ba-a044-fd4ea2b29db8",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"purchase"*                                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `voucherType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoiceDate`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Fecha del comprobante en formato YYYY-MM-DD.                                                  |
| `accountDate`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Fecha contable de la compra en formato YYYY-MM-DD.                                            |
| `dueDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Fecha de vencimiento en formato YYYY-MM-DD.                                                   |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `exchangeRate`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `supplierInvoiceNumber`                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Numero de comprobante del proveedor. Hasta 120 caracteres.                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `supplier`                                                                                    | [models.ApiPurchaseListResponseSupplier](../models/api-purchase-list-response-supplier.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |