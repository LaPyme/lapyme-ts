# ListV2ProductsRequest

## Example Usage

```typescript
import { ListV2ProductsRequest } from "lapyme/models/operations";

let value: ListV2ProductsRequest = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `page`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | Número de página                                                                                 |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Cantidad de resultados por página                                                                |
| `query`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Texto de búsqueda por nombre, SKU, barcode u opciones                                            |
| `search`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | Alias de query                                                                                   |
| `categoryId`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | Filtra por categoría                                                                             |
| `isActive`                                                                                       | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Filtra por estado activo                                                                         |
| `productType`                                                                                    | [operations.ListV2ProductsProductType](../../models/operations/list-v2-products-product-type.md) | :heavy_minus_sign:                                                                               | Filtra por tipo de producto                                                                      |