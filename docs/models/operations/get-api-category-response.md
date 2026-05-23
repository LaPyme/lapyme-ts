# GetApiCategoryResponse

## Example Usage

```typescript
import { GetApiCategoryResponse } from "lapyme/models/operations";

let value: GetApiCategoryResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiCategoryDetailResponse](../../models/api-category-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |