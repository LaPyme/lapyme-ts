# CategoryListResponse

## Example Usage

```typescript
import { CategoryListResponse } from "lapyme/models";

let value: CategoryListResponse = {
  success: true,
  data: [],
  pagination: {
    page: 2946.73,
    limit: 5369.51,
    total: 9440.53,
    totalPages: 2219.28,
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `success`                                                                               | *boolean*                                                                               | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `data`                                                                                  | [models.CategoryListResponseData](../models/category-list-response-data.md)[]           | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `pagination`                                                                            | [models.CategoryListResponsePagination](../models/category-list-response-pagination.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |