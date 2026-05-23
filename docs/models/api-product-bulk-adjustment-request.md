# ApiProductBulkAdjustmentRequest

## Example Usage

```typescript
import { ApiProductBulkAdjustmentRequest } from "lapyme/models";

let value: ApiProductBulkAdjustmentRequest = {
  target: "cost",
  operationType: "increase",
  adjustmentType: "percentage",
  adjustmentValue: 8410.09,
  selection: {
    type: "all",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `target`                                                                                                             | [models.Target](../models/target.md)                                                                                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `operationType`                                                                                                      | [models.OperationType](../models/operation-type.md)                                                                  | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `adjustmentType`                                                                                                     | [models.AdjustmentType](../models/adjustment-type.md)                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `adjustmentValue`                                                                                                    | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `search`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `category`                                                                                                           | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `productType`                                                                                                        | [models.ApiProductBulkAdjustmentRequestProductType](../models/api-product-bulk-adjustment-request-product-type.md)[] | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `defaultSupplierId`                                                                                                  | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `selection`                                                                                                          | *models.Selection*                                                                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |