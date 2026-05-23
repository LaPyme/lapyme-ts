# ApiCategoryDetailResponse

## Example Usage

```typescript
import { ApiCategoryDetailResponse } from "lapyme/models";

let value: ApiCategoryDetailResponse = {
  requestId: "<id>",
  data: {
    object: "category",
    id: "d3fc9535-daeb-4f4c-a067-479d09572a87",
    name: "<value>",
    parentId: "6f9b820c-9c2f-4bc9-b4a9-a388c9e6beca",
    defaultEconomicActivity: "<value>",
    createdAt: new Date("2025-06-20T04:02:51.337Z"),
    updatedAt: new Date("2024-03-24T03:08:09.416Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectd8582ce697](../models/api-shared-objectd8582ce697.md) | :heavy_check_mark:                                                           | N/A                                                                          |