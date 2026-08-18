# CreateApiSaleRequest

## Example Usage

```typescript
import { CreateApiSaleRequest } from "lapyme/models/operations";

let value: CreateApiSaleRequest = {
  idempotencyKey: "<value>",
  body: {
    voucherType: 4793.8,
    pointOfSaleId: "dc1850ad-657b-490f-89a9-9303425331fe",
    invoiceDate: new Date("2025-08-08"),
    currency: "DOL",
    items: [],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | Clave única para evitar duplicados al reintentar la misma creación de venta.        |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiSaleTransactionRequest](../../models/api-sale-transaction-request.md)    | :heavy_check_mark:                                                                  | N/A                                                                                 |