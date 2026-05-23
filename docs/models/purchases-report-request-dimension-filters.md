# PurchasesReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. El valor es un array de IDs o valores a incluir.

## Example Usage

```typescript
import { PurchasesReportRequestDimensionFilters } from "lapyme/models";

let value: PurchasesReportRequestDimensionFilters = {};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `supplier`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `supplierTaxCategory` | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `supplierProvince`    | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `supplierCity`        | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `product`             | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `category`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `subcategory`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `productType`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `warehouse`           | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `voucherType`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `currency`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `taxRate`             | *string*[]            | :heavy_minus_sign:    | N/A                   |