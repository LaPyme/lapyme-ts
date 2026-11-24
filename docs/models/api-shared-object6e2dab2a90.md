# ApiSharedObject6e2dab2a90

## Example Usage

```typescript
import { ApiSharedObject6e2dab2a90 } from "lapyme/models";

let value: ApiSharedObject6e2dab2a90 = {
  object: "quote_line",
  id: "7aa5ed8b-7d53-4ffc-93e4-cf54ea321231",
  productId: "78ac0001-f1b8-482a-8463-738a4bf81255",
  warehouseId: "1735d27f-a564-481d-af72-e3d2f5c499ee",
  quantity: 4487.54,
  unitPrice: 187125,
  discount: {
    type: "amount",
    value: 989522,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *"quote_line"*                                                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `productId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `customName`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `customProductType`                                                      | [models.ApiSharedEnum003ee2d7f5](../models/api-shared-enum003ee2d7f5.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `taxRateId`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `isExempt`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `warehouseId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `quantity`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `unitPrice`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `discount`                                                               | *models.ApiSharedObject6e2dab2a90Discount*                               | :heavy_check_mark:                                                       | N/A                                                                      |