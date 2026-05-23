# GetCategoryByIdResponse

## Example Usage

```typescript
import { GetCategoryByIdResponse } from "lapyme/models/operations";

let value: GetCategoryByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "cd8ca985-2a26-45a7-abae-b7245d09f476",
      name: "<value>",
      parentId: null,
      createdAt: new Date("2026-03-17T09:42:41.170Z"),
      updatedAt: new Date("2025-09-23T17:37:27.288Z"),
    },
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `headers`                                                                     | Record<string, *string*[]>                                                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `result`                                                                      | [models.GetCategoryByIdResponse](../../models/get-category-by-id-response.md) | :heavy_check_mark:                                                            | N/A                                                                           |