# ApiJournalEntriesListResponse

## Example Usage

```typescript
import { ApiJournalEntriesListResponse } from "lapyme/models";

let value: ApiJournalEntriesListResponse = {
  requestId: "<id>",
  effectiveScope: "all",
  object: "list",
  url: "https://gifted-illusion.org/",
  data: [
    {
      object: "journal_entry",
      id: "820e6c78-beb0-4ac9-b5f7-d5d049f5941e",
      entryNumber: 712813,
      date: new Date("2026-02-19"),
      description: "enthusiastically wrongly cook yahoo pfft",
      reference: "<value>",
      sourceType: "<value>",
      sourceId: "ea915876-78b9-4912-a31d-f42683425417",
      currency: "Namibia Dollar",
      exchangeRate: 9086.53,
      createdAt: new Date("2024-05-02T03:02:02.135Z"),
      updatedAt: new Date("2024-10-24T17:33:24.339Z"),
      lines: [
        {
          object: "journal_entry_line",
          id: "ce92e115-1c46-4426-aa0c-a7ee14c16a64",
          account: {
            object: "account",
            id: "405f9387-1ea4-4676-a44f-bf5f2cf8a440",
            code: "<value>",
            name: "<value>",
          },
          debit: 534697,
          credit: 525694,
          enteredDebit: 506880,
          enteredCredit: 528911,
          currency: "Bulgarian Lev",
          contact: {
            object: "contact",
            id: null,
            name: null,
          },
          costCenters: {
            "key": "<value>",
          },
          description: "reservation shrill sermon",
        },
      ],
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `effectiveScope`                                                                                  | [models.ApiSharedEnum4e8d9d097e](../models/api-shared-enum4e8d9d097e.md)                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `object`                                                                                          | *"list"*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `url`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiJournalEntriesListResponseData](../models/api-journal-entries-list-response-data.md)[] | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `hasMore`                                                                                         | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `nextCursor`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |