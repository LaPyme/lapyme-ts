# ApiSharedObjectb990586284

## Example Usage

```typescript
import { ApiSharedObjectb990586284 } from "lapyme/models";

let value: ApiSharedObjectb990586284 = {
  object: "price_list_price",
  priceListId: "e37cd5b0-2ab1-4f0e-8dd1-3c97974373ec",
  productId: "cc06d18e-1600-41a7-ad4c-b0915b3894ce",
  currency: "ARS",
  taxInclusive: true,
  taxRate: {
    id: 269798,
    value: 6838.53,
  },
  isExempt: false,
  calculation: {
    origin: "product_rule",
    type: "component_sum",
    sourcePriceListId: "4b2da195-e5d6-460f-9e6a-7385ad56b4ac",
  },
  status: "priced",
  unitPrice: 331282,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | *"price_list_price"*                                                         | :heavy_check_mark:                                                           | N/A                                                                          |
| `priceListId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `productId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `currency`                                                                   | *"ARS"*                                                                      | :heavy_check_mark:                                                           | N/A                                                                          |
| `taxInclusive`                                                               | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `taxRate`                                                                    | [models.ApiSharedObjecta3133edce3](../models/api-shared-objecta3133edce3.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `isExempt`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `calculation`                                                                | [models.ApiSharedObjectf2ec33bd59](../models/api-shared-objectf2ec33bd59.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | *"priced"*                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `unitPrice`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |