# GetWarehousesRequest

## Example Usage

```typescript
import { GetWarehousesRequest } from "lapyme/models/operations";

let value: GetWarehousesRequest = {
  search: "Principal",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `page`                           | *number*                         | :heavy_minus_sign:               | Número de página                 | 1                                |
| `limit`                          | *number*                         | :heavy_minus_sign:               | Cantidad de elementos por página | 50                               |
| `search`                         | *string*                         | :heavy_minus_sign:               | Término de búsqueda por nombre   | Principal                        |