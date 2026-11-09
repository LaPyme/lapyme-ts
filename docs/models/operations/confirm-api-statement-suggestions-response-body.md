# ConfirmApiStatementSuggestionsResponseBody

Treasury result or immutable replay

## Example Usage

```typescript
import { ConfirmApiStatementSuggestionsResponseBody } from "lapyme/models/operations";

let value: ConfirmApiStatementSuggestionsResponseBody = {
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
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [operations.ConfirmApiStatementSuggestionsData](../../models/operations/confirm-api-statement-suggestions-data.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |