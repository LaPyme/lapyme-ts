# PreviewApiInflationAdjustmentResponse

## Example Usage

```typescript
import { PreviewApiInflationAdjustmentResponse } from "lapyme/models/operations";

let value: PreviewApiInflationAdjustmentResponse = {
  headers: {
    "key": [],
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