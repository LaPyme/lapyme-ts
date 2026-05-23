# UpdateApiCategoryResponse

## Example Usage

```typescript
import { UpdateApiCategoryResponse } from "lapyme/models/operations";

let value: UpdateApiCategoryResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    data: {
      category: {
        object: "category",
        id: "228c4e4c-9187-41f2-9741-a806a1a0092f",
        name: "<value>",
        parentId: "77551f7b-2a82-4c23-bb7d-de1017923888",
        defaultEconomicActivity: "<value>",
        createdAt: new Date("2025-03-29T15:54:24.841Z"),
        updatedAt: new Date("2025-12-26T11:46:52.730Z"),
      },
    },
    warnings: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiCategoryUpdateResponse](../../models/api-category-update-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |