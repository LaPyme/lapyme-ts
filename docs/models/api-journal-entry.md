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
  circuitId: "5e0ab9df-5606-415c-bda1-7049c2b3686c",
  createdAt: new Date("2024-08-12T06:16:07.451Z"),
  updatedAt: new Date("2026-09-08T23:33:56.597Z"),
  lines: [],
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