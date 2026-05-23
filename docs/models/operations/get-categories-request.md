# GetCategoriesRequest

## Example Usage

```typescript
import { GetCategoriesRequest } from "lapyme/models/operations";

let value: GetCategoriesRequest = {
  search: "Electrónicos",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `page`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | Número de página                                                                          | 1                                                                                         |
| `limit`                                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | Cantidad de elementos por página                                                          | 20                                                                                        |
| `search`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | Término de búsqueda por nombre                                                            | Electrónicos                                                                              |
| `sortBy`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | Campo por el cual ordenar                                                                 | name                                                                                      |
| `sortOrder`                                                                               | [operations.GetCategoriesSortOrder](../../models/operations/get-categories-sort-order.md) | :heavy_minus_sign:                                                                        | Orden de clasificación                                                                    | asc                                                                                       |