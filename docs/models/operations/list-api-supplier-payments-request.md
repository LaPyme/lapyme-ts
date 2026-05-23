# ListApiSupplierPaymentsRequest

## Example Usage

```typescript
import { ListApiSupplierPaymentsRequest } from "lapyme/models/operations";

let value: ListApiSupplierPaymentsRequest = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Valor de next_cursor recibido en la respuesta anterior                                                   |
| `limit`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Cantidad máxima de resultados por respuesta                                                              |
| `query`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Texto de búsqueda por proveedor, número de pago o método de pago                                         |
| `status`                                                                                                 | [operations.ListApiSupplierPaymentsStatus](../../models/operations/list-api-supplier-payments-status.md) | :heavy_minus_sign:                                                                                       | Estado del pago                                                                                          |
| `dateFrom`                                                                                               | [Date](../../types/rfcdate.md)                                                                           | :heavy_minus_sign:                                                                                       | Fecha inicial en formato YYYY-MM-DD                                                                      |
| `dateTo`                                                                                                 | [Date](../../types/rfcdate.md)                                                                           | :heavy_minus_sign:                                                                                       | Fecha final en formato YYYY-MM-DD                                                                        |