# InventoryReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filterable del source. El valor es un array de IDs o valores a incluir.

## Example Usage

```typescript
import { InventoryReportRequestDimensionFilters } from "lapyme/models";

let value: InventoryReportRequestDimensionFilters = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `product`          | *string*[]         | :heavy_minus_sign: | N/A                |
| `category`         | *string*[]         | :heavy_minus_sign: | N/A                |
| `productType`      | *string*[]         | :heavy_minus_sign: | N/A                |
| `warehouse`        | *string*[]         | :heavy_minus_sign: | N/A                |
| `currency`         | *string*[]         | :heavy_minus_sign: | N/A                |