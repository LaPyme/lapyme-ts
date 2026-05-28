# ApiJournalEntryWriteResponse

## Example Usage

```typescript
import { ApiJournalEntryWriteResponse } from "lapyme/models";

let value: ApiJournalEntryWriteResponse = {
  requestId: "<id>",
  data: {
    journalEntry: {
      object: "journal_entry",
      id: "77b5135c-68a1-42b9-b6fc-5b5917274d49",
    },
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [models.ApiJournalEntryWriteResponseData](../models/api-journal-entry-write-response-data.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warnings`                                                                                    | *any*[]                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |