# ApiPriceListDetailResponse

## Example Usage

```typescript
import { ApiPriceListDetailResponse } from "lapyme/models";

let value: ApiPriceListDetailResponse = {
  requestId: "<id>",
  data: {
    id: "4b2d5e0f-5679-499f-b5f1-268756621269",
    name: "<value>",
    isAutomatic: true,
    automaticPricingMode: "base_price_adjustment",
    adjustmentPercentage: 777.56,
    sourcePriceListId: "c6ce5028-6ee0-4bd9-af26-d417c9f40547",
    taxInclusive: true,
    createdAt: new Date("2024-11-24T14:50:35.379Z"),
    object: "price_list",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject812fa01669](../models/api-shared-object812fa01669.md) | :heavy_check_mark:                                                           | N/A                                                                          |