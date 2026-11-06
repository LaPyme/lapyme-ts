# ListApiStatementLinesData

## Example Usage

```typescript
import { ListApiStatementLinesData } from "lapyme/models/operations";

let value: ListApiStatementLinesData = {
  object: "statement_line",
  id: "4a87398a-bddb-46dc-b6b3-7187ebdfe098",
  statementId: "d5606760-0fed-4813-91bb-1c9247ffad46",
  bankAccountId: "01cb76cc-0c9d-4b81-968e-e3d360578bc4",
  externalId: "<id>",
  occurredAt: new Date("2024-06-02"),
  description: "pretty attribute dislocate marten as an",
  reference: "<value>",
  amount: 572307,
  runningBalance: 894640,
  parentLineId: "aca63376-99a2-4be6-a54f-ac4c3f19a462",
  attachedLineIds: [],
  groupAmount: 397072,
  status: "excluded",
  reconciliationId: "d68bff06-e3f5-4258-b5e0-0f263a9bb13a",
  candidates: [],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `object`                                                                    | *"statement_line"*                                                          | :heavy_check_mark:                                                          | N/A                                                                         |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `statementId`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `bankAccountId`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `externalId`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `occurredAt`                                                                | [Date](../../types/rfcdate.md)                                              | :heavy_check_mark:                                                          | N/A                                                                         |
| `description`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `reference`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `amount`                                                                    | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `runningBalance`                                                            | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `parentLineId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `attachedLineIds`                                                           | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `groupAmount`                                                               | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `status`                                                                    | [models.ApiSharedEnume7b34c7d75](../../models/api-shared-enume7b34c7d75.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `reconciliationId`                                                          | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `candidates`                                                                | [operations.Candidate](../../models/operations/candidate.md)[]              | :heavy_check_mark:                                                          | N/A                                                                         |