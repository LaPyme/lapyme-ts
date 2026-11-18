# ListApiSummarizedJournalResponse

## Example Usage

```typescript
import { ListApiSummarizedJournalResponse } from "lapyme/models/operations";

let value: ListApiSummarizedJournalResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    effectiveScope: {
      circuitId: "5643363b-d6a2-421b-a1bd-db42e516c729",
      circuitName: "<value>",
    },
    object: "list",
    url: "https://willing-ostrich.biz/",
    data: [],
    hasMore: false,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [models.ApiJournalEntriesListResponse](../../models/api-journal-entries-list-response.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |