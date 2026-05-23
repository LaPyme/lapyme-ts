# ListV2SuppliersRequest

## Example Usage

```typescript
import { ListV2SuppliersRequest } from "lapyme/models/operations";

let value: ListV2SuppliersRequest = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `page`                                     | *number*                                   | :heavy_minus_sign:                         | Número de página                           |
| `limit`                                    | *number*                                   | :heavy_minus_sign:                         | Cantidad de resultados por página          |
| `query`                                    | *string*                                   | :heavy_minus_sign:                         | Texto de búsqueda por nombre, CUIT o email |
| `search`                                   | *string*                                   | :heavy_minus_sign:                         | Alias de query                             |
| `isActive`                                 | *boolean*                                  | :heavy_minus_sign:                         | Filtra por estado activo                   |