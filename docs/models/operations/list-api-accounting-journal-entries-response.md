# ListApiAccountingJournalEntriesResponse

## Example Usage

```typescript
import { ListApiAccountingJournalEntriesResponse } from "lapyme/models/operations";

let value: ListApiAccountingJournalEntriesResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://infinite-suitcase.org",
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