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
  createdAt: new Date("2026-02-24T12:55:40.521Z"),
  updatedAt: new Date("2025-06-06T09:16:56.649Z"),
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
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lines`                                                                                       | [models.ApiSharedObject136b444e9e](../models/api-shared-object136b444e9e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |