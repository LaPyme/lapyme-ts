# ConfirmApiStatementSuggestionsResponse

## Example Usage

```typescript
import { ConfirmApiStatementSuggestionsResponse } from "lapyme/models/operations";

let value: ConfirmApiStatementSuggestionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "statement_suggestion_confirmation",
      statementId: "10d307fb-dc3d-4e33-8df8-3c904198ee9d",
      resolvedCount: 941241,
      skippedCount: 582099,
      resolved: [
        {
          statementLineId: "c03cb235-5c1a-4adf-b846-aaabd2e55d94",
          match: "contact_document",
        },
      ],
      skipped: [],
    },
  },
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                           | Record<string, *string*[]>                                                                                                          | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `result`                                                                                                                            | [operations.ConfirmApiStatementSuggestionsResponseBody](../../models/operations/confirm-api-statement-suggestions-response-body.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |