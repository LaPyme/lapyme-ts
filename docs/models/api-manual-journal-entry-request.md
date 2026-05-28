# ApiManualJournalEntryRequest

## Example Usage

```typescript
import { ApiManualJournalEntryRequest } from "lapyme/models";

let value: ApiManualJournalEntryRequest = {
  occurredAt: new Date("2025-02-07"),
  description: "tag maroon whoever tenement pfft lest vice",
  lines: [],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `occurredAt`                                                                                    | [Date](../types/rfcdate.md)                                                                     | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `description`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `reference`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `exchangeRate`                                                                                  | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `expectedUpdatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `lines`                                                                                         | [models.ApiManualJournalEntryRequestLine](../models/api-manual-journal-entry-request-line.md)[] | :heavy_check_mark:                                                                              | N/A                                                                                             |