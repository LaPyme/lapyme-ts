# AppliedCollectionsReportRequest

## Example Usage

```typescript
import { AppliedCollectionsReportRequest } from "lapyme/models";

let value: AppliedCollectionsReportRequest = {
  source: "applied_collections",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [
    "applied_collection_net_amount",
  ],
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                            | *"applied_collections"*                                                                                                             | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `period`                                                                                                                            | [models.ReportPeriod](../models/report-period.md)                                                                                   | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `dimensions`                                                                                                                        | [models.AppliedCollectionsReportRequestDimension](../models/applied-collections-report-request-dimension.md)[]                      | :heavy_minus_sign:                                                                                                                  | Dimensiones de agrupación. Máximo 12.                                                                                               |
| `measures`                                                                                                                          | [models.AppliedCollectionsReportRequestMeasure](../models/applied-collections-report-request-measure.md)[]                          | :heavy_check_mark:                                                                                                                  | Medidas a calcular. Al menos una.                                                                                                   |
| `dimensionFilters`                                                                                                                  | [models.AppliedCollectionsReportRequestDimensionFilters](../models/applied-collections-report-request-dimension-filters.md)         | :heavy_minus_sign:                                                                                                                  | Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. El valor es un array de IDs o valores a incluir. |
| `includeTotals`                                                                                                                     | *boolean*                                                                                                                           | :heavy_minus_sign:                                                                                                                  | Si es true, la respuesta incluye totales agregados en el campo `totals`.                                                            |
| `reportingCurrency`                                                                                                                 | [models.ApiSharedEnum6440f2bcc2](../models/api-shared-enum6440f2bcc2.md)                                                            | :heavy_minus_sign:                                                                                                                  | Currency used for all monetary measures in the report.                                                                              |