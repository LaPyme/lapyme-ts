# ApiManualJournalEntryUpdateRequest

## Example Usage

```typescript
import { ApiManualJournalEntryUpdateRequest } from "lapyme/models";

let value: ApiManualJournalEntryUpdateRequest = {
  occurredAt: new Date("2026-01-07"),
  description: "crossly grade yum pro offset meanwhile pace gah except",
  lines: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `occurredAt`                                                                                                 | [Date](../types/rfcdate.md)                                                                                  | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `reference`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `exchangeRate`                                                                                               | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `expectedUpdatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `unapplyAllocatedLines`                                                                                      | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `lines`                                                                                                      | [models.ApiManualJournalEntryUpdateRequestLine](../models/api-manual-journal-entry-update-request-line.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |