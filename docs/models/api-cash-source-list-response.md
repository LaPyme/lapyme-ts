# ApiCashSourceListResponse

## Example Usage

```typescript
import { ApiCashSourceListResponse } from "lapyme/models";

let value: ApiCashSourceListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: false,
  nextCursor: "<value>",
  object: "list",
  url: "https://well-off-turret.com/",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `requestId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.ApiCashSource](../models/api-cash-source.md)[]                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `hasMore`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `nextCursor`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `object`                                                                 | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md) | :heavy_check_mark:                                                       | List-envelope discriminator.                                             |
| `url`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | Requested list path.                                                     |