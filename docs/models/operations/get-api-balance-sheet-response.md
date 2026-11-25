# GetApiBalanceSheetResponse

## Example Usage

```typescript
import { GetApiBalanceSheetResponse } from "lapyme/models/operations";

let value: GetApiBalanceSheetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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