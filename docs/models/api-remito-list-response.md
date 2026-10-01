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
        id: "19e08252-4cae-48ce-af51-86ddbd090f69",
        name: "<value>",
      },
      origin: {
        type: "sale",
        saleId: "dbbaee62-3ac7-4658-bd06-2032f062890d",
      },
      created: new Date("2025-12-14T12:35:14.751Z"),
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