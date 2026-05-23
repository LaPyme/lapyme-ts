# ApiWarehouseListResponse

## Example Usage

```typescript
import { ApiWarehouseListResponse } from "lapyme/models";

let value: ApiWarehouseListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://sleepy-doubter.org",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `requestId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [models.ApiWarehouseListResponseData](../models/api-warehouse-list-response-data.md)[]   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `hasMore`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `nextCursor`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `object`                                                                                 | [models.ApiWarehouseListResponseObject](../models/api-warehouse-list-response-object.md) | :heavy_check_mark:                                                                       | List-envelope discriminator.                                                             |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | Requested list path.                                                                     |