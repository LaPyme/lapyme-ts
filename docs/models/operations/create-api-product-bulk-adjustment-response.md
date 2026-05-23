# CreateApiProductBulkAdjustmentResponse

## Example Usage

```typescript
import { CreateApiProductBulkAdjustmentResponse } from "lapyme/models/operations";

let value: CreateApiProductBulkAdjustmentResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      productBulkAdjustment: {
        object: "product_bulk_adjustment",
        updated: 29183,
        skipped: 415247,
      },
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ApiProductBulkAdjustmentResponse](../../models/api-product-bulk-adjustment-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |