# ListApiCashSourcesResponse

## Example Usage

```typescript
import { ListApiCashSourcesResponse } from "lapyme/models/operations";

let value: ListApiCashSourcesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://short-dandelion.name/",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `result`                                                                          | [models.ApiCashSourceListResponse](../../models/api-cash-source-list-response.md) | :heavy_check_mark:                                                                | N/A                                                                               |