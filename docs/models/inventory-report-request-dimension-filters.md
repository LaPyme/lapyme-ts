# InventoryReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. El valor es un array de IDs o valores a incluir.

## Example Usage

```typescript
import { InventoryReportRequestDimensionFilters } from "lapyme/models";

let value: InventoryReportRequestDimensionFilters = {};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `product`             | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `productName`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `variantSku`          | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `category`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `subcategory`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `defaultSupplierName` | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `productType`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `warehouse`           | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `currency`            | *string*[]            | :heavy_minus_sign:    | N/A                   |