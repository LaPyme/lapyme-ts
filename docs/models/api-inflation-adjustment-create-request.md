# ApiInflationAdjustmentCreateRequest

## Example Usage

```typescript
import { ApiInflationAdjustmentCreateRequest } from "lapyme/models";

let value: ApiInflationAdjustmentCreateRequest = {
  periodStart: new Date("2025-01-21"),
  closingDate: new Date("2026-05-30"),
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `periodStart`                                                                  | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `closingDate`                                                                  | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `treatmentsConfirmed`                                                          | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `accountTreatments`                                                            | [models.ApiSharedObject0e307df43a](../models/api-shared-object0e307df43a.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `openingBalanceBases`                                                          | [models.ApiSharedObjectcd635e5b25](../models/api-shared-objectcd635e5b25.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `indexOverrides`                                                               | [models.ApiSharedObject50f90cd0ce](../models/api-shared-object50f90cd0ce.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |