# ApiProductBulkAdjustmentResponse

## Example Usage

```typescript
import { ApiProductBulkAdjustmentResponse } from "lapyme/models";

let value: ApiProductBulkAdjustmentResponse = {
  requestId: "<id>",
  data: {
    productBulkAdjustment: {
      object: "product_bulk_adjustment",
      updated: 29183,
      skipped: 415247,
    },
  },
  warnings: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `data`                                                                                                | [models.ApiProductBulkAdjustmentResponseData](../models/api-product-bulk-adjustment-response-data.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `warnings`                                                                                            | *any*[]                                                                                               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |