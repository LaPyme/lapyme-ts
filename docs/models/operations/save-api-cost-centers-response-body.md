# SaveApiCostCentersResponseBody

Guardar una dimensión y sus centros de costo

## Example Usage

```typescript
import { SaveApiCostCentersResponseBody } from "lapyme/models/operations";

let value: SaveApiCostCentersResponseBody = {
  requestId: "<id>",
  data: {
    object: "cost_center_batch",
    dimension: {
      id: "c385ef68-b521-4e2b-8630-8aea71109cc1",
      position: 538136,
      name: "<value>",
    },
    costCenters: [],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `requestId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.SaveApiCostCentersData](../../models/operations/save-api-cost-centers-data.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |