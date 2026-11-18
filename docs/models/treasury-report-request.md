# TreasuryReportRequest

## Example Usage

```typescript
import { TreasuryReportRequest } from "lapyme/models";

let value: TreasuryReportRequest = {
  source: "treasury",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [
    "treasury_adjustment_net",
  ],
  treasuryCurrencyBasis: "original",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                            | *"treasury"*                                                                                                                        | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `period`                                                                                                                            | [models.ReportPeriod](../models/report-period.md)                                                                                   | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `dimensions`                                                                                                                        | [models.TreasuryReportRequestDimension](../models/treasury-report-request-dimension.md)[]                                           | :heavy_minus_sign:                                                                                                                  | Dimensiones de agrupación. Máximo 12.                                                                                               |
| `measures`                                                                                                                          | [models.TreasuryReportRequestMeasure](../models/treasury-report-request-measure.md)[]                                               | :heavy_check_mark:                                                                                                                  | Medidas de tesorería a calcular. Al menos una.                                                                                      |
| `dimensionFilters`                                                                                                                  | [models.TreasuryReportRequestDimensionFilters](../models/treasury-report-request-dimension-filters.md)                              | :heavy_minus_sign:                                                                                                                  | Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. El valor es un array de IDs o valores a incluir. |
| `includeTotals`                                                                                                                     | *boolean*                                                                                                                           | :heavy_minus_sign:                                                                                                                  | Si es true, la respuesta incluye totales agregados en el campo `totals`.                                                            |
| `reportingCurrency`                                                                                                                 | [models.ApiSharedEnum6440f2bcc2](../models/api-shared-enum6440f2bcc2.md)                                                            | :heavy_minus_sign:                                                                                                                  | Currency used for all monetary measures in the report.                                                                              |
| `treasuryCurrencyBasis`                                                                                                             | [models.TreasuryCurrencyBasis](../models/treasury-currency-basis.md)                                                                | :heavy_check_mark:                                                                                                                  | `original` informa la moneda nativa de cada cuenta. `functional_ars` informa el valor contable funcional en ARS.                    |