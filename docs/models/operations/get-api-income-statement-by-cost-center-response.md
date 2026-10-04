# GetApiIncomeStatementByCostCenterResponse

## Example Usage

```typescript
import { GetApiIncomeStatementByCostCenterResponse } from "lapyme/models/operations";

let value: GetApiIncomeStatementByCostCenterResponse = {
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
      circuitId: "33d39db2-6c1a-4393-928b-bdb81c8f9e7e",
      circuitName: "<value>",
    },
    data: {},
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiSharedObject1923b260ad](../../models/api-shared-object1923b260ad.md) | :heavy_check_mark:                                                              | N/A                                                                             |