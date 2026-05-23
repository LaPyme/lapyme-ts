# PaymentsReportRequest

## Example Usage

```typescript
import { PaymentsReportRequest } from "lapyme/models";

let value: PaymentsReportRequest = {
  source: "payments",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [
    "paymentCount",
  ],
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                            | *"payments"*                                                                                                                        | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `period`                                                                                                                            | [models.ReportPeriod](../models/report-period.md)                                                                                   | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `dimensions`                                                                                                                        | [models.PaymentsReportRequestDimension](../models/payments-report-request-dimension.md)[]                                           | :heavy_minus_sign:                                                                                                                  | Dimensiones de agrupación. Máximo 4.                                                                                                |
| `measures`                                                                                                                          | [models.PaymentsReportRequestMeasure](../models/payments-report-request-measure.md)[]                                               | :heavy_check_mark:                                                                                                                  | Medidas a calcular. Al menos una.                                                                                                   |
| `dimensionFilters`                                                                                                                  | [models.PaymentsReportRequestDimensionFilters](../models/payments-report-request-dimension-filters.md)                              | :heavy_minus_sign:                                                                                                                  | Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. El valor es un array de IDs o valores a incluir. |
| `includeTotals`                                                                                                                     | *boolean*                                                                                                                           | :heavy_minus_sign:                                                                                                                  | Si es true, la respuesta incluye totales agregados en el campo `totals`.                                                            |