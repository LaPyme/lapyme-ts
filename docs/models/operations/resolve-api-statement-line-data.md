# ResolveApiStatementLineData

## Example Usage

```typescript
import { ResolveApiStatementLineData } from "lapyme/models/operations";

let value: ResolveApiStatementLineData = {
  object: "statement_line_resolution",
  statementLineId: "9281cbe1-3c71-4e61-b4b9-d1e2be2117a3",
  statementId: "a3b66bc7-7a86-40c1-972b-a816ff4235f1",
  status: "excluded",
  reconciliationId: "9fd3570c-eff3-4450-9a0c-25574af78902",
  createdRecordId: "7976ccba-f7d7-4cdc-881a-d7da4acaf3e6",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `object`                                                                    | *"statement_line_resolution"*                                               | :heavy_check_mark:                                                          | N/A                                                                         |
| `statementLineId`                                                           | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `statementId`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `status`                                                                    | [models.ApiSharedEnume7b34c7d75](../../models/api-shared-enume7b34c7d75.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `reconciliationId`                                                          | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `createdRecordId`                                                           | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `createdRecords`                                                            | [operations.CreatedRecord](../../models/operations/created-record.md)[]     | :heavy_minus_sign:                                                          | N/A                                                                         |
| `rememberedRuleId`                                                          | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `ruleResolvedLineCount`                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `pairedStatementLineId`                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |