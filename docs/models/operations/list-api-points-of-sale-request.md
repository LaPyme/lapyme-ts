# ListApiPointsOfSaleRequest

## Example Usage

```typescript
import { ListApiPointsOfSaleRequest } from "lapyme/models/operations";

let value: ListApiPointsOfSaleRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | *string*                                               | :heavy_minus_sign:                                     | Valor de next_cursor recibido en la respuesta anterior |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Cantidad máxima de resultados por respuesta            |
| `query`                                                | *string*                                               | :heavy_minus_sign:                                     | Texto de búsqueda por nombre o número                  |
| `search`                                               | *string*                                               | :heavy_minus_sign:                                     | Alias de query                                         |
| `includeInactive`                                      | *boolean*                                              | :heavy_minus_sign:                                     | Incluye puntos de venta inactivos                      |