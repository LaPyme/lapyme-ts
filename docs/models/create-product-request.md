# CreateProductRequest

## Example Usage

```typescript
import { CreateProductRequest } from "lapyme/models";

let value: CreateProductRequest = {
  name: "<value>",
  sku: "<value>",
  cost: 9776.44,
  price: 3741.63,
  taxRateId: 883959,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Nombre del producto                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Descripción del producto                                                                   |
| `categoryId`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | ID de la categoría del producto                                                            |
| `sku`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | Código SKU único del producto                                                              |
| `barcode`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Código de barras del producto                                                              |
| `oemCode`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Código OEM del producto                                                                    |
| `currency`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | Moneda del precio (ISO 4217)                                                               |
| `cost`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | Costo del producto                                                                         |
| `price`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | Precio de venta del producto                                                               |
| `taxRateId`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | ID de la tasa de impuesto aplicable                                                        |
| `stockMinimum`                                                                             | *number*                                                                                   | :heavy_minus_sign:                                                                         | Stock mínimo requerido                                                                     |
| `defaultSupplierId`                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | ID del proveedor por defecto                                                               |
| `productType`                                                                              | [models.CreateProductRequestProductType](../models/create-product-request-product-type.md) | :heavy_minus_sign:                                                                         | Tipo de producto                                                                           |
| `isActive`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Estado activo del producto                                                                 |