# SalesReportRequest

## Example Usage

```typescript
import { SalesReportRequest } from "lapyme/models";

let value: SalesReportRequest = {
  source: "sales",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                         | *"sales"*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `period`                                                                                                                         | [models.ReportPeriod](../models/report-period.md)                                                                                | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `dimensions`                                                                                                                     | [models.SalesReportRequestDimension](../models/sales-report-request-dimension.md)[]                                              | :heavy_minus_sign:                                                                                                               | Dimensiones de agrupamiento. Máximo 4.                                                                                           |
| `measures`                                                                                                                       | [models.SalesReportRequestMeasure](../models/sales-report-request-measure.md)[]                                                  | :heavy_check_mark:                                                                                                               | Medidas a calcular. Al menos una.                                                                                                |
| `dimensionFilters`                                                                                                               | [models.SalesReportRequestDimensionFilters](../models/sales-report-request-dimension-filters.md)                                 | :heavy_minus_sign:                                                                                                               | Filtros por dimensión. Cada clave debe ser una dimensión filterable del source. El valor es un array de IDs o valores a incluir. |
| `includeTotals`                                                                                                                  | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Si es true, la respuesta incluye totales agregados en el campo `totals`.                                                         |
| `dateBasis`                                                                                                                      | [models.SalesReportRequestDateBasis](../models/sales-report-request-date-basis.md)                                               | :heavy_minus_sign:                                                                                                               | `commercial` usa la fecha de la venta. `fiscal` usa la fecha contable del comprobante.                                           |