# UpdateApiReconciliationRuleResponse

## Example Usage

```typescript
import { UpdateApiReconciliationRuleResponse } from "lapyme/models/operations";

let value: UpdateApiReconciliationRuleResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "reconciliation_rule",
      id: "839ab305-5be6-44e6-8ed3-2454f3136c3f",
      bankAccountId: "dcfee8e2-84af-4d06-bd59-d80aa910fcb6",
      text: "<value>",
      direction: "credit",
      accountId: "8616a7d0-f45d-4ded-a11e-3e6687cb21b3",
      contactId: "c9d71857-0107-4ee3-ad23-b4581905f1e7",
      costCenter1Id: "8d1a607a-059b-48ab-9690-8eeeefdb7ec3",
      costCenter2Id: "fce7a1b2-83f4-4ab8-b488-376394fa5d1d",
      costCenter3Id: "b4e97a57-9be2-4b0d-96fa-62321f6cb706",
      status: "active",
      resolvedLineCount: 410895,
      createdAt: new Date("2024-07-13T15:13:47.669Z"),
      updatedAt: new Date("2025-04-12T15:23:00.819Z"),
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiSharedObjectaa73c77263](../../models/api-shared-objectaa73c77263.md) | :heavy_check_mark:                                                              | N/A                                                                             |