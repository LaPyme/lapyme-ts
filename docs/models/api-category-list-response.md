# ApiCategoryListResponse

## Example Usage

```typescript
import { ApiCategoryListResponse } from "lapyme/models";

let value: ApiCategoryListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: true,
  nextCursor: null,
  object: "list",
  url: "https://unconscious-draw.info/",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiCategoryListResponseData](../models/api-category-list-response-data.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `object`                                                                               | [models.ApiCategoryListResponseObject](../models/api-category-list-response-object.md) | :heavy_check_mark:                                                                     | List-envelope discriminator.                                                           |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | Requested list path.                                                                   |