# ListApiCashSourcesRequest

## Example Usage

```typescript
import { ListApiCashSourcesRequest } from "lapyme/models/operations";

let value: ListApiCashSourcesRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `cursor`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Valor de next_cursor recibido en la respuesta anterior                        |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Cantidad máxima de resultados por respuesta                                   |
| `query`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Texto de búsqueda por nombre, ubicación o punto de venta                      |
| `type`                                                                        | [models.ApiSharedEnum1579b1abf3](../../models/api-shared-enum1579b1abf3.md)[] | :heavy_minus_sign:                                                            | Tipo de caja a devolver. Puede repetirse o enviarse separado por comas.       |
| `types`                                                                       | [models.ApiSharedEnum1579b1abf3](../../models/api-shared-enum1579b1abf3.md)[] | :heavy_minus_sign:                                                            | Alias plural de type.                                                         |
| `includeInactive`                                                             | *boolean*                                                                     | :heavy_minus_sign:                                                            | Incluye cajas inactivas                                                       |