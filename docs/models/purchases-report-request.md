# PurchasesReportRequest

## Example Usage

```typescript
import { PurchasesReportRequest } from "lapyme/models";

let value: PurchasesReportRequest = {
  source: "purchases",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [
    "purchaseSubtotal",
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                         | *"purchases"*                                                                                                                    | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `period`                                                                                                                         | [models.ReportPeriod](../models/report-period.md)                                                                                | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `dimensions`                                                                                                                     | [models.PurchasesReportRequestDimension](../models/purchases-report-request-dimension.md)[]                                      | :heavy_minus_sign:                                                                                                               | Dimensiones de agrupamiento. Máximo 4.                                                                                           |
| `measures`                                                                                                                       | [models.PurchasesReportRequestMeasure](../models/purchases-report-request-measure.md)[]                                          | :heavy_check_mark:                                                                                                               | Medidas a calcular. Al menos una.                                                                                                |
| `dimensionFilters`                                                                                                               | [models.PurchasesReportRequestDimensionFilters](../models/purchases-report-request-dimension-filters.md)                         | :heavy_minus_sign:                                                                                                               | Filtros por dimensión. Cada clave debe ser una dimensión filterable del source. El valor es un array de IDs o valores a incluir. |
| `includeTotals`                                                                                                                  | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Si es true, la respuesta incluye totales agregados en el campo `totals`.                                                         |