# ApiSharedObjectcc3aec15bc

## Example Usage

```typescript
import { ApiSharedObjectcc3aec15bc } from "lapyme/models";

let value: ApiSharedObjectcc3aec15bc = {
  object: "price_list_price",
  priceListId: "d7d2f2bf-192d-4dda-a054-8c1f080465ba",
  productId: "aba67ec4-82da-4876-907a-5daefb5e16a3",
  currency: "ARS",
  taxInclusive: false,
  taxRate: {
    id: 269798,
    value: 6838.53,
  },
  isExempt: true,
  calculation: {
    origin: "product_rule",
    type: "component_sum",
    sourcePriceListId: "4b2da195-e5d6-460f-9e6a-7385ad56b4ac",
  },
  status: "unavailable",
  unitPrice: "<value>",
  unavailableReason: "pricing_input_unavailable",
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
| `status`                                                                     | *"unavailable"*                                                              | :heavy_check_mark:                                                           | N/A                                                                          |
| `unitPrice`                                                                  | *any*                                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `unavailableReason`                                                          | *"pricing_input_unavailable"*                                                | :heavy_check_mark:                                                           | N/A                                                                          |