# ApiJournalEntry

## Example Usage

```typescript
import { ApiJournalEntry } from "lapyme/models";

let value: ApiJournalEntry = {
  object: "journal_entry",
  id: "9b963990-6fae-4f09-add1-f27165b57b37",
  entryNumber: 519308,
  date: new Date("2025-11-04"),
  description: "lawmaker sock finer ocelot provided but curiously at",
  reference: null,
  sourceType: null,
  sourceId: "96b18b82-3f5e-404f-9431-1fe2d0017c10",
  currency: "Guinea Franc",
  exchangeRate: 5176.37,
  createdAt: new Date("2026-04-15T11:32:44.272Z"),
  updatedAt: new Date("2024-12-17T08:18:52.744Z"),
  lines: [
    {
      object: "journal_entry_line",
      id: "0ab9df56-0615-4cda-b170-49c2b3686ce3",
      account: {
        object: "account",
        id: "1405f938-71ea-4467-8644-fbf5f2cf8a44",
        code: "<value>",
        name: "<value>",
      },
      debit: 438222,
      credit: 88333,
      enteredDebit: 74114,
      enteredCredit: 437639,
      currency: "Metical",
      contact: {
        object: "contact",
        id: "c3575bb6-9682-436e-ba0c-8edfd5668521",
        name: "<value>",
      },
      costCenters: {
        "key": "<value>",
        "key1": "<value>",
      },
      description: null,
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
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lines`                                                                                       | [models.ApiSharedObject136b444e9e](../models/api-shared-object136b444e9e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |