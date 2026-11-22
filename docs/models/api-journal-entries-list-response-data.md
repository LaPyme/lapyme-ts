# ApiJournalEntriesListResponseData

## Example Usage

```typescript
import { ApiJournalEntriesListResponseData } from "lapyme/models";

let value: ApiJournalEntriesListResponseData = {
  object: "journal_entry",
  id: "51b7b6d6-5c87-4a53-9dbf-a77f66b880d1",
  entryNumber: 966408,
  date: new Date("2024-01-11"),
  description: "unimpressively partially ha",
  reference: "<value>",
  sourceType: "<value>",
  sourceId: "5ff77513-545d-452c-943f-babebd88c325",
  currency: "Lilangeni",
  exchangeRate: 4170.04,
  circuitId: "776aa841-0205-420f-beb6-9c92c01a9570",
  createdAt: new Date("2025-06-12T16:03:35.900Z"),
  updatedAt: new Date("2026-05-05T16:54:10.730Z"),
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
      description: "ack blah enroll within coil sleet ordinary till nervously",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"journal_entry"*                                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `entryNumber`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `exchangeRate`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `circuitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Circuito contable del asiento. null es el circuito General.                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lines`                                                                                       | [models.ApiSharedObjectbed5d5812a](../models/api-shared-objectbed5d5812a.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |