# GetApiIncomeStatementResponse

## Example Usage

```typescript
import { GetApiIncomeStatementResponse } from "lapyme/models/operations";

let value: GetApiIncomeStatementResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    effectiveScope: {
      circuitId: "8abec0cb-e3f6-4226-94ca-2340e2f84285",
      circuitName: "<value>",
    },
    data: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiSharedObject3e680f0be1](../../models/api-shared-object3e680f0be1.md) | :heavy_check_mark:                                                              | N/A                                                                             |