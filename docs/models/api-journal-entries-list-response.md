# ApiJournalEntriesListResponse

## Example Usage

```typescript
import { ApiJournalEntriesListResponse } from "lapyme/models";

let value: ApiJournalEntriesListResponse = {
  requestId: "<id>",
  effectiveScope: {
    circuitId: "5643363b-d6a2-421b-a1bd-db42e516c729",
    circuitName: "<value>",
  },
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
      circuitId: "49ce92e1-151c-4464-926a-0ca7ee14c16a",
      createdAt: new Date("2024-11-23T03:57:21.175Z"),
      updatedAt: new Date("2025-10-11T19:12:45.728Z"),
      lines: [
        {
          object: "journal_entry_line",
          id: "fef308b0-f40c-4b0e-86b2-546470a17320",
          account: {
            object: "account",
            id: "405f9387-1ea4-4676-a44f-bf5f2cf8a440",
            code: "<value>",
            name: "<value>",
          },
          debit: 445414,
          credit: 848074,
          enteredDebit: 152698,
          enteredCredit: 717417,
          currency: "Jordanian Dinar",
          contact: {
            object: "contact",
            id: "c01ff2a5-287f-4db8-afbe-fd9b837ca82d",
            name: "<value>",
          },
          costCenters: {
            "key": "<value>",
            "key1": "<value>",
          },
          description:
            "ack blah enroll within coil sleet ordinary till nervously",
        },
      ],
    },
  ],
  hasMore: false,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `effectiveScope`                                                                                                              | *models.ApiJournalEntriesListResponseEffectiveScope*                                                                          | :heavy_check_mark:                                                                                                            | Circuito sobre el que corrió el reporte: `all` para todos los circuitos, o el circuito pedido (`circuit_id` null es General). |
| `object`                                                                                                                      | *"list"*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `url`                                                                                                                         | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `data`                                                                                                                        | [models.ApiJournalEntriesListResponseData](../models/api-journal-entries-list-response-data.md)[]                             | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `hasMore`                                                                                                                     | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `nextCursor`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |