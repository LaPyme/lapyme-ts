# AppliedCollectionsReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. El valor es un array de IDs o valores a incluir.

## Example Usage

```typescript
import { AppliedCollectionsReportRequestDimensionFilters } from "lapyme/models";

let value: AppliedCollectionsReportRequestDimensionFilters = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `customer`               | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `assignedSalesperson`    | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `formattedPaymentNumber` | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `formattedInvoiceNumber` | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `voucherType`            | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `customerStatus`         | *string*[]               | :heavy_minus_sign:       | N/A                      |