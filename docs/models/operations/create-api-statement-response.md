# CreateApiStatementResponse

## Example Usage

```typescript
import { CreateApiStatementResponse } from "lapyme/models/operations";

let value: CreateApiStatementResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "statement",
      id: "0e767f2a-1180-4418-8435-2fd25a0bb803",
      bankAccountId: "6d44f541-57a8-47ca-bbf9-5e210eee8348",
      periodStart: new Date("2026-05-05"),
      periodEnd: new Date("2026-10-06"),
      openingBalance: 767585,
      closingBalance: 472726,
      currency: "USD",
      source: "spreadsheet",
      createdAt: new Date("2024-07-09T00:57:48.401Z"),
      updatedAt: new Date("2025-03-08T13:53:15.152Z"),
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiSharedObject11052f1fc2](../../models/api-shared-object11052f1fc2.md) | :heavy_check_mark:                                                              | N/A                                                                             |