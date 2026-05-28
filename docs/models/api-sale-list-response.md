# ApiSaleListResponse

## Example Usage

```typescript
import { ApiSaleListResponse } from "lapyme/models";

let value: ApiSaleListResponse = {
  requestId: "<id>",
  data: [
    {},
  ],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://funny-diagram.org/",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiSharedObjectf814978533](../models/api-shared-objectf814978533.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `object`                                                                       | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)       | :heavy_check_mark:                                                             | List-envelope discriminator.                                                   |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | Requested list path.                                                           |