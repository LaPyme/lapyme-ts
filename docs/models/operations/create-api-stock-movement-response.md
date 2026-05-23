# CreateApiStockMovementResponse

## Example Usage

```typescript
import { CreateApiStockMovementResponse } from "lapyme/models/operations";

let value: CreateApiStockMovementResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      stockMovementId: "4ce52d4d-2a4e-4323-8d3b-c9b0aa555aff",
      transactionGroupId: "68d77021-aa21-4b0b-b8c4-da4e7bbaf746",
      affectedProductIds: [],
      idempotentReplay: false,
    },
    warnings: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiStockMovementResponse](../../models/api-stock-movement-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |