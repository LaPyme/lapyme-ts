# MarketplaceListingsReportRequest

Instantánea de publicaciones activas en ARS, una fila por publicación. Estima la contribución de una unidad, sin período ni comparación. Requiere `marketplace_item_id` o `marketplace_listing`. Devuelve todas las publicaciones; para ordenar y paginar usá `response_mode=assistant`. Los campos financieros requieren permiso vigente para ver costos.

## Example Usage

```typescript
import { MarketplaceListingsReportRequest } from "lapyme/models";

let value: MarketplaceListingsReportRequest = {
  source: "marketplace_listings",
  dimensions: [],
  measures: [
    "estimated_contribution_percent",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                         | *"marketplace_listings"*                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `dimensions`                                                                                                     | [models.MarketplaceListingsReportRequestDimension](../models/marketplace-listings-report-request-dimension.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `measures`                                                                                                       | [models.MarketplaceListingsReportRequestMeasure](../models/marketplace-listings-report-request-measure.md)[]     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `reportingCurrency`                                                                                              | *"ARS"*                                                                                                          | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `filters`                                                                                                        | Record<string, *any*>[]                                                                                          | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `resultFilters`                                                                                                  | Record<string, *any*>[]                                                                                          | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `dimensionFilters`                                                                                               | Record<string, *string*[]>                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |