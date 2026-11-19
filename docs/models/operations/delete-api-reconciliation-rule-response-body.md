# DeleteApiReconciliationRuleResponseBody

Treasury result or immutable replay

## Example Usage

```typescript
import { DeleteApiReconciliationRuleResponseBody } from "lapyme/models/operations";

let value: DeleteApiReconciliationRuleResponseBody = {
  requestId: "<id>",
  data: {
    object: "reconciliation_rule",
    id: "64826575-f086-4da3-9a71-6f0efae53b86",
    deleted: true,
    releasedLineCount: 309384,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [operations.DeleteApiReconciliationRuleData](../../models/operations/delete-api-reconciliation-rule-data.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |