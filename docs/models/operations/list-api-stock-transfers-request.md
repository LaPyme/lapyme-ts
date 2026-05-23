# ListApiStockTransfersRequest

## Example Usage

```typescript
import { ListApiStockTransfersRequest } from "lapyme/models/operations";

let value: ListApiStockTransfersRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `cursor`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Valor de next_cursor recibido en la respuesta anterior                        |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Cantidad máxima de resultados por respuesta                                   |
| `query`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Texto de búsqueda por nota, producto, SKU o variante                          |
| `search`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Alias de query                                                                |
| `dateFrom`                                                                    | [Date](../../types/rfcdate.md)                                                | :heavy_minus_sign:                                                            | Fecha inicial                                                                 |
| `dateTo`                                                                      | [Date](../../types/rfcdate.md)                                                | :heavy_minus_sign:                                                            | Fecha final                                                                   |
| `statuses`                                                                    | [models.ApiSharedEnumc66b046f05](../../models/api-shared-enumc66b046f05.md)[] | :heavy_minus_sign:                                                            | Estados de la transferencia. Puede repetirse o enviarse separada por comas.   |
| `sourceWarehouseId`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | Depósito de origen                                                            |
| `targetWarehouseId`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | Depósito de destino                                                           |