# SaveApiCostCentersRequest

## Example Usage

```typescript
import { SaveApiCostCentersRequest } from "lapyme/models/operations";

let value: SaveApiCostCentersRequest = {
  dimension: {
    position: 534267,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dimension`                                                                      | [operations.DimensionRequest](../../models/operations/dimension-request.md)      | :heavy_check_mark:                                                               | N/A                                                                              |
| `costCenters`                                                                    | [operations.CostCenterRequest](../../models/operations/cost-center-request.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |