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
    total: 173178,
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lapymeVersion`                                                                                                                                    | [models.ApiSharedEnumf007ccd7a1](../../models/api-shared-enumf007ccd7a1.md)                                                                        | :heavy_minus_sign:                                                                                                                                 | Versión fechada del contrato de creación de ventas. Usá 2026-08-20 en integraciones nuevas. Omitirla activa el comportamiento histórico deprecado. |
| `idempotencyKey`                                                                                                                                   | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Clave única para evitar duplicados al reintentar la misma creación de venta.                                                                       |
| `xRequestId`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno.                                                                |
| `body`                                                                                                                                             | [models.ApiSaleTransactionRequest](../../models/api-sale-transaction-request.md)                                                                   | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |