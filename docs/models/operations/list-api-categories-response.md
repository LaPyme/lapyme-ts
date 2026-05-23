# ListApiCategoriesResponse

## Example Usage

```typescript
import { ListApiCategoriesResponse } from "lapyme/models/operations";

let value: ListApiCategoriesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    data: [],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://free-league.biz",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiCategoryListResponse](../../models/api-category-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |