# ApiCategoryUpdateResponse

## Example Usage

```typescript
import { ApiCategoryUpdateResponse } from "lapyme/models";

let value: ApiCategoryUpdateResponse = {
  requestId: "<id>",
  data: {
    category: {
      object: "category",
      id: "30c19cb6-55cd-418d-b8b1-948ac90050ba",
      name: "<value>",
      parentId: "cdcfd3db-f56a-4f0a-a77f-bfaf01a805f3",
      defaultEconomicActivity: "<value>",
      createdAt: new Date("2026-09-22T16:25:55.529Z"),
      updatedAt: new Date("2026-09-09T00:59:04.619Z"),
    },
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiCategoryUpdateResponseData](../models/api-category-update-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `warnings`                                                                             | *any*[]                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |