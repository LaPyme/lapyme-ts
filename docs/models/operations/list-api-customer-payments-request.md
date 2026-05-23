# ListApiCustomerPaymentsRequest

## Example Usage

```typescript
import { ListApiCustomerPaymentsRequest } from "lapyme/models/operations";

let value: ListApiCustomerPaymentsRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Valor de next_cursor recibido en la respuesta anterior                      |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | Cantidad máxima de resultados por respuesta                                 |
| `query`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | Texto de búsqueda por cliente, número de cobranza o método de pago          |
| `status`                                                                    | [models.ApiSharedEnum8ef2575a44](../../models/api-shared-enum8ef2575a44.md) | :heavy_minus_sign:                                                          | Estado de la cobranza                                                       |
| `dateFrom`                                                                  | [Date](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                          | Fecha inicial en formato YYYY-MM-DD                                         |
| `dateTo`                                                                    | [Date](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                          | Fecha final en formato YYYY-MM-DD                                           |