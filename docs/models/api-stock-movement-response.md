# ApiStockMovementResponse

## Example Usage

```typescript
import { ApiStockMovementResponse } from "lapyme/models";

let value: ApiStockMovementResponse = {
  requestId: "<id>",
  data: {
    stockMovementId: "4ce52d4d-2a4e-4323-8d3b-c9b0aa555aff",
    transactionGroupId: "68d77021-aa21-4b0b-b8c4-da4e7bbaf746",
    affectedProductIds: [],
    idempotentReplay: false,
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.ApiStockMovementResponseData](../models/api-stock-movement-response-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `warnings`                                                                           | *any*[]                                                                              | :heavy_check_mark:                                                                   | N/A                                                                                  |