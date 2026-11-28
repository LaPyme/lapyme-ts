# SaveApiCostCentersData

## Example Usage

```typescript
import { SaveApiCostCentersData } from "lapyme/models/operations";

let value: SaveApiCostCentersData = {
  object: "cost_center_batch",
  dimension: {
    id: "c385ef68-b521-4e2b-8630-8aea71109cc1",
    position: 538136,
    name: "<value>",
  },
  costCenters: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | *"cost_center_batch"*                                                              | :heavy_check_mark:                                                                 | N/A                                                                                |
| `dimension`                                                                        | [operations.DimensionResponse](../../models/operations/dimension-response.md)      | :heavy_check_mark:                                                                 | N/A                                                                                |
| `costCenters`                                                                      | [operations.CostCenterResponse](../../models/operations/cost-center-response.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |