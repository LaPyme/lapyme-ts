# ReportQueryResponseMetadata

## Example Usage

```typescript
import { ReportQueryResponseMetadata } from "lapyme/models";

let value: ReportQueryResponseMetadata = {
  source: "treasury",
  dimensions: [],
  measures: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  reportingCurrency: "USD",
  rateBasis: "treasury_functional_ars_accounting_value",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `source`                                                                                 | [models.ApiSharedEnum47bbbed3c1](../models/api-shared-enum47bbbed3c1.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `dimensions`                                                                             | *string*[]                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `measures`                                                                               | *string*[]                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `period`                                                                                 | [models.ReportQueryResponsePeriod](../models/report-query-response-period.md)            | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `dateBasis`                                                                              | [models.ApiSharedEnume8f16939df](../models/api-shared-enume8f16939df.md)                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `resolvedFilters`                                                                        | [models.ApiSharedObject5524465fb0](../models/api-shared-object5524465fb0.md)[]           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `reportingCurrency`                                                                      | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rateBasis`                                                                              | [models.ApiSharedEnumb5a8e60557](../models/api-shared-enumb5a8e60557.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `treasuryCurrencyBasis`                                                                  | [models.ApiSharedEnum59bd24ac3d](../models/api-shared-enum59bd24ac3d.md)                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `treasuryVisibilityScope`                                                                | [models.ApiSharedEnumd440d6785b](../models/api-shared-enumd440d6785b.md)                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `amountQualityByMeasure`                                                                 | Record<string, [models.ApiSharedEnum714ff181d6](../models/api-shared-enum714ff181d6.md)> | :heavy_minus_sign:                                                                       | N/A                                                                                      |