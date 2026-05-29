# ApiJournalEntriesListResponse

## Example Usage

```typescript
import { ApiJournalEntriesListResponse } from "lapyme/models";

let value: ApiJournalEntriesListResponse = {
  requestId: "<id>",
  object: "list",
  url: "https://grandiose-exterior.info",
  data: [
    {
      object: "journal_entry",
      id: "c820e6c7-8beb-40ac-b95f-7d5d049f5941",
      entryNumber: 660669,
      date: new Date("2026-02-20"),
      description: "burgeon intent pish likewise hmph old massage certainly",
      reference: "<value>",
      sourceType: "<value>",
      sourceId: "26834254-17af-4de1-849c-e92e1151c464",
      currency: "Jordanian Dinar",
      exchangeRate: 476.12,
      createdAt: new Date("2026-04-11T14:14:43.216Z"),
      updatedAt: new Date("2026-01-13T03:57:16.903Z"),
      lines: [],
    },
  ],
  hasMore: false,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `object`                                                                                          | *"list"*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `url`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiJournalEntriesListResponseData](../models/api-journal-entries-list-response-data.md)[] | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `hasMore`                                                                                         | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `nextCursor`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |