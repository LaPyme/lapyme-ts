# ListApiPurchaseOrdersRequest

## Example Usage

```typescript
import { ListApiPurchaseOrdersRequest } from "lapyme/models/operations";

let value: ListApiPurchaseOrdersRequest = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Texto de búsqueda por proveedor o número de orden                                                          |
| `cursor`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Valor de next_cursor recibido en la respuesta anterior                                                     |
| `limit`                                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Cantidad máxima de resultados por respuesta                                                                |
| `dateFrom`                                                                                                 | [Date](../../types/rfcdate.md)                                                                             | :heavy_minus_sign:                                                                                         | Fecha inicial de la orden                                                                                  |
| `dateTo`                                                                                                   | [Date](../../types/rfcdate.md)                                                                             | :heavy_minus_sign:                                                                                         | Fecha final de la orden                                                                                    |
| `status`                                                                                                   | [operations.ListApiPurchaseOrdersStatus](../../models/operations/list-api-purchase-orders-status.md)       | :heavy_minus_sign:                                                                                         | Estado o lista de estados separados por coma: draft, sent, partially_received, received, closed, cancelled |