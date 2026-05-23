# ApiProductListResponse

## Example Usage

```typescript
import { ApiProductListResponse } from "lapyme/models";

let value: ApiProductListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://oily-license.biz/",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `requestId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [models.ApiProductListResponseData](../models/api-product-list-response-data.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `nextCursor`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `object`                                                                           | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)           | :heavy_check_mark:                                                                 | List-envelope discriminator.                                                       |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | Requested list path.                                                               |