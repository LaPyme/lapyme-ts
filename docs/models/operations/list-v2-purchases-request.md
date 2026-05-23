# ListV2PurchasesRequest

## Example Usage

```typescript
import { ListV2PurchasesRequest } from "lapyme/models/operations";

let value: ListV2PurchasesRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `page`                                                                    | *number*                                                                  | :heavy_minus_sign:                                                        | Número de página                                                          |
| `limit`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | Cantidad de resultados por página                                         |
| `query`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Texto de búsqueda por proveedor, CUIT o número de factura del proveedor   |
| `search`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Alias de query                                                            |
| `dateFrom`                                                                | [Date](../../types/rfcdate.md)                                            | :heavy_minus_sign:                                                        | Fecha inicial para el filtro                                              |
| `dateTo`                                                                  | [Date](../../types/rfcdate.md)                                            | :heavy_minus_sign:                                                        | Fecha final para el filtro                                                |
| `dateAttribute`                                                           | [operations.DateAttribute](../../models/operations/date-attribute.md)     | :heavy_minus_sign:                                                        | Campo de fecha a usar para el filtro                                      |
| `amountAttribute`                                                         | [operations.AmountAttribute](../../models/operations/amount-attribute.md) | :heavy_minus_sign:                                                        | Campo monetario a usar para min/max                                       |
| `minBalance`                                                              | *number*                                                                  | :heavy_minus_sign:                                                        | Monto mínimo para el filtro                                               |
| `maxBalance`                                                              | *number*                                                                  | :heavy_minus_sign:                                                        | Monto máximo para el filtro                                               |