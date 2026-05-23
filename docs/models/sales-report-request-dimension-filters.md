# SalesReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filterable del source. El valor es un array de IDs o valores a incluir.

## Example Usage

```typescript
import { SalesReportRequestDimensionFilters } from "lapyme/models";

let value: SalesReportRequestDimensionFilters = {};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `customer`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `customerTaxCategory` | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `personType`          | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `province`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `city`                | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `product`             | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `category`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `productType`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `salesperson`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `pointOfSale`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `warehouse`           | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `register`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `integrationSource`   | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `voucherType`         | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `currency`            | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `paymentStatus`       | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `caeStatus`           | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `paymentMethod`       | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `taxRate`             | *string*[]            | :heavy_minus_sign:    | N/A                   |