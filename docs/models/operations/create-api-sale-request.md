# CreateApiSaleRequest

## Example Usage

```typescript
import { CreateApiSaleRequest } from "lapyme/models/operations";

let value: CreateApiSaleRequest = {
  idempotencyKey: "<value>",
  body: {
    voucherType: 821807,
    pointOfSaleId: "7dc1850a-d657-4b90-bf9a-99303425331f",
    invoiceDate: new Date("2024-01-09"),
    currency: "DOL",
    items: [
      {
        quantity: 462.52,
        unitPrice: 173178,
      },
    ],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | Clave única para evitar duplicados al reintentar la misma creación de venta.        |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiSaleTransactionRequest](../../models/api-sale-transaction-request.md)    | :heavy_check_mark:                                                                  | N/A                                                                                 |