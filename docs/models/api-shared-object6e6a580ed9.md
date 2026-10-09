# ApiSharedObject6e6a580ed9

## Example Usage

```typescript
import { ApiSharedObject6e6a580ed9 } from "lapyme/models";

let value: ApiSharedObject6e6a580ed9 = {
  object: "quote_line",
  id: "22aa2973-49b1-4b42-ae48-fa7022e3fbf6",
  productId: "62acc9ae-f23d-4b6a-94aa-a6d6ca31d223",
  warehouseId: "396cae91-fc3b-427f-9985-d0fccd4ed261",
  quantity: 6665.75,
  unitPrice: 534229,
  discount: {
    type: "percentage",
    value: 7947.64,
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
| `warehouseId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `quantity`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `unitPrice`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `discount`                                                               | *models.ApiSharedObject6e6a580ed9Discount*                               | :heavy_check_mark:                                                       | N/A                                                                      |