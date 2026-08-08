# ListApiRemitosResponse

## Example Usage

```typescript
import { ListApiRemitosResponse } from "lapyme/models/operations";

let value: ListApiRemitosResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
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
    url: "https://victorious-baseboard.com",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.ApiRemitoListResponse](../../models/api-remito-list-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |