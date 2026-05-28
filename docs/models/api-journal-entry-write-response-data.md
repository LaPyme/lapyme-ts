# ApiJournalEntryWriteResponseData

## Example Usage

```typescript
import { ApiJournalEntryWriteResponseData } from "lapyme/models";

let value: ApiJournalEntryWriteResponseData = {
  journalEntry: {
    object: "journal_entry",
    id: "77b5135c-68a1-42b9-b6fc-5b5917274d49",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `journalEntry`                                    | [models.JournalEntry](../models/journal-entry.md) | :heavy_check_mark:                                | N/A                                               |
| `idempotentReplay`                                | *boolean*                                         | :heavy_minus_sign:                                | N/A                                               |