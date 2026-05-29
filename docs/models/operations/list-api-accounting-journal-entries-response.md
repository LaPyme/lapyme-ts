# ListApiAccountingJournalEntriesResponse

## Example Usage

```typescript
import { ListApiAccountingJournalEntriesResponse } from "lapyme/models/operations";

let value: ListApiAccountingJournalEntriesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://unused-fedora.info",
    data: [],
    hasMore: true,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [models.ApiJournalEntriesListResponse](../../models/api-journal-entries-list-response.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |