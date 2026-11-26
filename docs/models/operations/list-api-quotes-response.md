# ListApiQuotesResponse

## Example Usage

```typescript
import { ListApiQuotesResponse } from "lapyme/models/operations";

let value: ListApiQuotesResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://shimmering-drive.biz",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [models.ApiQuoteListResponse](../../models/api-quote-list-response.md) | :heavy_check_mark:                                                     | N/A                                                                    |