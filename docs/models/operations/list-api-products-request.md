# ListApiProductsRequest

## Example Usage

```typescript
import { ListApiProductsRequest } from "lapyme/models/operations";

let value: ListApiProductsRequest = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Valor de next_cursor recibido en la respuesta anterior                                             |
| `limit`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Cantidad máxima de resultados por respuesta                                                        |
| `query`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Texto de búsqueda por nombre, SKU, código de barras u opciones                                     |
| `search`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Alias de query                                                                                     |
| `categoryId`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Filtra por categoría                                                                               |
| `isActive`                                                                                         | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Filtra por estado activo                                                                           |
| `productType`                                                                                      | [operations.ListApiProductsProductType](../../models/operations/list-api-products-product-type.md) | :heavy_minus_sign:                                                                                 | Filtra por tipo de producto                                                                        |