# TreasuryReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. El valor es un array de IDs o valores a incluir.

## Example Usage

```typescript
import { TreasuryReportRequestDimensionFilters } from "lapyme/models";

let value: TreasuryReportRequestDimensionFilters = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `date`                     | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `week`                     | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `month`                    | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `quarter`                  | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `year`                     | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `treasuryAccount`          | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `treasuryAccountType`      | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `treasuryAccountCurrency`  | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `treasuryLocation`         | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `treasuryMovementType`     | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `treasuryAdjustmentSource` | *string*[]                 | :heavy_minus_sign:         | N/A                        |
| `treasuryAccountStatus`    | *string*[]                 | :heavy_minus_sign:         | N/A                        |