# CreateApiOrderInvoiceRequest

## Example Usage

```typescript
import { CreateApiOrderInvoiceRequest } from "lapyme/models/operations";

let value: CreateApiOrderInvoiceRequest = {
  orderId: "bff042ef-1b64-4d93-813b-6f4053b15da0",
  idempotencyKey: "<value>",
  body: {
    voucherType: 803989,
    pointOfSaleId: "e00eb137-7adb-4e4a-ba0b-31ebbeb11c98",
    invoiceDate: new Date("2026-09-23"),
    lines: [],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `orderId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | ID del pedido                                                              |
| `idempotencyKey`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | Clave estable para deduplicar reintentos de la misma operación.            |
| `body`                                                                     | [models.ApiOrderInvoiceRequest](../../models/api-order-invoice-request.md) | :heavy_check_mark:                                                         | N/A                                                                        |