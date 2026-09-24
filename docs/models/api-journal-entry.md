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
| `lines`                                                                                       | [models.ApiSharedObjectbed5d5812a](../models/api-shared-objectbed5d5812a.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |