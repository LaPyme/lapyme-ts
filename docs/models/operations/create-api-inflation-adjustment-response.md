# CreateApiInflationAdjustmentResponse

## Example Usage

```typescript
import { CreateApiInflationAdjustmentResponse } from "lapyme/models/operations";

let value: CreateApiInflationAdjustmentResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      journalEntry: {
        object: "journal_entry",
        id: "77b5135c-68a1-42b9-b6fc-5b5917274d49",
      },
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `result`                                                                                | [models.ApiJournalEntryWriteResponse](../../models/api-journal-entry-write-response.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |