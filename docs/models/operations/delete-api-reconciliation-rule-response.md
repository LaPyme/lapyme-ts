# DeleteApiReconciliationRuleResponse

## Example Usage

```typescript
import { DeleteApiReconciliationRuleResponse } from "lapyme/models/operations";

let value: DeleteApiReconciliationRuleResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "reconciliation_rule",
      id: "64826575-f086-4da3-9a71-6f0efae53b86",
      deleted: true,
      releasedLineCount: 309384,
    },
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [operations.DeleteApiReconciliationRuleResponseBody](../../models/operations/delete-api-reconciliation-rule-response-body.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |