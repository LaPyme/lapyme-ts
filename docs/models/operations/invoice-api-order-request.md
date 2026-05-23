# InvoiceApiOrderRequest

## Example Usage

```typescript
import { InvoiceApiOrderRequest } from "lapyme/models/operations";

let value: InvoiceApiOrderRequest = {
  orderId: "d0e1ab5f-4526-4e5a-944c-1f85ca67869d",
  idempotencyKey: "<value>",
  body: {
    voucherType: 514812,
    pointOfSaleId: "7fb2f28d-cbb9-44b6-97f7-3884553ae80b",
    invoiceDate: new Date("2025-02-15"),
    lines: [
      {
        orderLineId: "050fcd75-781a-43fd-ad5a-082001c3885b",
        quantityToInvoice: 26604,
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `orderId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | ID del pedido                                                              |
| `idempotencyKey`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | Clave estable para deduplicar reintentos de la misma operación.            |
| `body`                                                                     | [models.ApiOrderInvoiceRequest](../../models/api-order-invoice-request.md) | :heavy_check_mark:                                                         | N/A                                                                        |