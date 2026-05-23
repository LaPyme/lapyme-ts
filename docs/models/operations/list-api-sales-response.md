# ListApiSalesResponse

## Example Usage

```typescript
import { ListApiSalesResponse } from "lapyme/models/operations";

let value: ListApiSalesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [
      {},
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://rough-pop.info/",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [models.ApiSaleListResponse](../../models/api-sale-list-response.md) | :heavy_check_mark:                                                   | N/A                                                                  |