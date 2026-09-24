# ListApiSummarizedJournalResponse

## Example Usage

```typescript
import { ListApiSummarizedJournalResponse } from "lapyme/models/operations";

let value: ListApiSummarizedJournalResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    effectiveScope: "all",
    object: "list",
    url: "https://glorious-halt.biz",
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