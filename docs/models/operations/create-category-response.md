# CreateCategoryResponse

## Example Usage

```typescript
import { CreateCategoryResponse } from "lapyme/models/operations";

let value: CreateCategoryResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    success: true,
    data: {
      id: "1d180e10-b80f-4574-9c95-2960784e6b30",
      name: "<value>",
      parentId: "1571f68d-f44a-4a8a-8a61-c41fc35ba88c",
      createdAt: new Date("2024-11-12T12:24:28.833Z"),
      updatedAt: new Date("2026-05-31T00:12:10.192Z"),
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `headers`                                                                 | Record<string, *string*[]>                                                | :heavy_check_mark:                                                        | N/A                                                                       |
| `result`                                                                  | [models.CreateCategoryResponse](../../models/create-category-response.md) | :heavy_check_mark:                                                        | N/A                                                                       |