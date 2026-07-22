# ListApiVoucherTypesRequest

## Example Usage

```typescript
import { ListApiVoucherTypesRequest } from "lapyme/models/operations";

let value: ListApiVoucherTypesRequest = {
  operation: "purchase",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `operation`                                                                                | [models.ApiSharedEnumed1129741e](../../models/api-shared-enumed1129741e.md)                | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customerId`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | UUID obligatorio cuando operation=sale                                                     |
| `pointOfSaleId`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | UUID obligatorio cuando operation=sale                                                     |
| `supplierId`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | UUID obligatorio cuando operation=purchase                                                 |
| `totalAmount`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | Total opcional de la venta en unidades menores de currency. Habilita la evaluación de FCE. |
| `currency`                                                                                 | [models.ApiSharedEnum6cfb146157](../../models/api-shared-enum6cfb146157.md)                | :heavy_minus_sign:                                                                         | Obligatorio cuando se envía total_amount                                                   |
| `exchangeRate`                                                                             | *number*                                                                                   | :heavy_minus_sign:                                                                         | Pesos argentinos por dólar. Obligatorio solamente para currency=DOL.                       |
| `cursor`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | Valor de next_cursor recibido en la respuesta anterior                                     |
| `limit`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | Cantidad máxima de resultados por respuesta                                                |