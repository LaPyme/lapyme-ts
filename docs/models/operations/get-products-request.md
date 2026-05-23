# GetProductsRequest

## Example Usage

```typescript
import { GetProductsRequest } from "lapyme/models/operations";

let value: GetProductsRequest = {
  search: "Smartphone",
  categoryId: "cat-123e4567",
  isActive: true,
  productType: "product",
  priceListId: "pl-123e4567",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `page`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | Número de página                                                                          | 1                                                                                         |
| `limit`                                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | Cantidad de elementos por página                                                          | 50                                                                                        |
| `search`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | Término de búsqueda                                                                       | Smartphone                                                                                |
| `categoryId`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | ID de la categoría                                                                        | cat-123e4567                                                                              |
| `isActive`                                                                                | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Filtrar por estado activo                                                                 | true                                                                                      |
| `productType`                                                                             | [operations.GetProductsProductType](../../models/operations/get-products-product-type.md) | :heavy_minus_sign:                                                                        | Tipo de producto                                                                          | product                                                                                   |
| `priceListId`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | ID de la lista de precios para calcular precio efectivo                                   | pl-123e4567                                                                               |