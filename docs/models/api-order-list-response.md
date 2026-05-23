# ApiOrderListResponse

## Example Usage

```typescript
import { ApiOrderListResponse } from "lapyme/models";

let value: ApiOrderListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://immediate-convection.net",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ApiOrderListResponseData](../models/api-order-list-response-data.md)[]   | :heavy_check_mark:                                                               | N/A                                                                              |
| `hasMore`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `nextCursor`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `object`                                                                         | [models.ApiOrderListResponseObject](../models/api-order-list-response-object.md) | :heavy_check_mark:                                                               | List-envelope discriminator.                                                     |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | Requested list path.                                                             |