# ApiPurchaseListResponseData

## Example Usage

```typescript
import { ApiPurchaseListResponseData } from "lapyme/models";

let value: ApiPurchaseListResponseData = {
  installments: [
    {
      dueDate: new Date("2024-08-10"),
      amount: 116916,
      position: 789198,
      openAmount: 402203,
      settlement: "pending",
      isOverdue: true,
    },
  ],
  nextOpenInstallment: {
    dueDate: new Date("2024-11-19"),
    openAmount: 92845,
  },
  overdueOpenTotal: 342663,
  balanceAboveSchedule: 283557,
  object: "purchase",
  id: "8206ff4d-5378-4e89-892f-1211f80d31af",
  voucherType: "<value>",
  invoiceDate: "<value>",
  accountDate: "<value>",
  dueDate: "<value>",
  total: 451694,
  balance: 760959,
  warehouseId: "248fc62b-a044-4fd4-9ea2-b29db8aaf6c2",
  currency: "Qatari Rial",
  exchangeRate: "<value>",
  supplierInvoiceNumber: "<value>",
  createdAt: new Date("2025-08-26T14:08:30.738Z"),
  supplier: {
    id: "f74be50a-bc92-453e-9d9c-78cca32019bd",
    name: "<value>",
  },
  tags: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `installments`                                                                                | [models.ApiSharedObject524ac46285](../models/api-shared-object524ac46285.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nextOpenInstallment`                                                                         | [models.ApiSharedObject1112460e21](../models/api-shared-object1112460e21.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `overdueOpenTotal`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Saldo vencido, en centavos.                                                                   |
| `balanceAboveSchedule`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Saldo por encima del cronograma, en centavos.                                                 |
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
| `supplier`                                                                                    | [models.ApiSharedObject91cc200368](../models/api-shared-object91cc200368.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.ApiSharedObjected3905a55b](../models/api-shared-objected3905a55b.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |