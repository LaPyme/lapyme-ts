# ConfirmApiStatementSuggestionsData

## Example Usage

```typescript
import { ConfirmApiStatementSuggestionsData } from "lapyme/models/operations";

let value: ConfirmApiStatementSuggestionsData = {
  object: "statement_suggestion_confirmation",
  statementId: "0c42f47e-c212-4c27-9aae-7b258f0de79c",
  resolvedCount: 93947,
  skippedCount: 406160,
  resolved: [],
  skipped: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `object`                                                     | *"statement_suggestion_confirmation"*                        | :heavy_check_mark:                                           | N/A                                                          |
| `statementId`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `resolvedCount`                                              | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `skippedCount`                                               | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `resolved`                                                   | [operations.Resolved](../../models/operations/resolved.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `skipped`                                                    | [operations.Skipped](../../models/operations/skipped.md)[]   | :heavy_check_mark:                                           | N/A                                                          |