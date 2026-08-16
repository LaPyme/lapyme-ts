# ApiRemitoListResponse

## Example Usage

```typescript
import { ApiRemitoListResponse } from "lapyme/models";

let value: ApiRemitoListResponse = {
  requestId: "<id>",
  data: [
    {
      id: "68f8714c-9876-47ad-9d41-cc6f24c220fd",
      number: "<value>",
      date: new Date("2026-11-07"),
      customer: {
        id: "0dbbaee6-23ac-4765-b8d0-62032f062890",
        name: "<value>",
      },
      origin: {
        type: "fulfillment",
        fulfillmentId: "606cdf2b-9462-4141-9c6a-fdf8242b57f2",
      },
      created: new Date("2024-09-18T18:51:52.862Z"),
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://multicolored-aftermath.name/",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ApiRemitoListResponseData](../models/api-remito-list-response-data.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `hasMore`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `nextCursor`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `object`                                                                         | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)         | :heavy_check_mark:                                                               | List-envelope discriminator.                                                     |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | Requested list path.                                                             |