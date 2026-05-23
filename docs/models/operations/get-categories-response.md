# GetCategoriesResponse

## Example Usage

```typescript
import { GetCategoriesResponse } from "lapyme/models/operations";

let value: GetCategoriesResponse = {
  headers: {},
  result: {
    success: false,
    data: [],
    pagination: {
      page: 2946.73,
      limit: 5369.51,
      total: 9440.53,
      totalPages: 2219.28,
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `result`                                                              | [models.CategoryListResponse](../../models/category-list-response.md) | :heavy_check_mark:                                                    | N/A                                                                   |