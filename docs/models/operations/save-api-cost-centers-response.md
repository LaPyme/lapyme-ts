# SaveApiCostCentersResponse

## Example Usage

```typescript
import { SaveApiCostCentersResponse } from "lapyme/models/operations";

let value: SaveApiCostCentersResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `result`                                                                                                    | [operations.SaveApiCostCentersResponseBody](../../models/operations/save-api-cost-centers-response-body.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |