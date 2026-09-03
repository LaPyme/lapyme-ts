# InvoiceApiSaleRequest

## Example Usage

```typescript
import { InvoiceApiSaleRequest } from "lapyme/models/operations";

let value: InvoiceApiSaleRequest = {
  saleId: "3572797b-0611-434c-8b1f-d52535bcfb85",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `saleId`                                                        | *string*                                                        | :heavy_check_mark:                                              | ID de la venta existente                                        |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |