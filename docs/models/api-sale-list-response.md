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
| `data`                                                                         | [models.ApiSaleListResponseData](../models/api-sale-list-response-data.md)[]   | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `object`                                                                       | [models.ApiSaleListResponseObject](../models/api-sale-list-response-object.md) | :heavy_check_mark:                                                             | List-envelope discriminator.                                                   |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | Requested list path.                                                           |