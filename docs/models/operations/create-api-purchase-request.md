# CreateApiPurchaseRequest

## Example Usage

```typescript
import { CreateApiPurchaseRequest } from "lapyme/models/operations";

let value: CreateApiPurchaseRequest = {
  idempotencyKey: "<value>",
  body: {
    voucherType: 601343,
    currency: "PES",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | Clave única para evitar duplicados al reintentar la misma creación de compra.            |
| `xRequestId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno.      |
| `body`                                                                                   | [models.ApiPurchaseTransactionRequest](../../models/api-purchase-transaction-request.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |