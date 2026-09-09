# ApiPriceListUpdateResponseData

## Example Usage

```typescript
import { ApiPriceListUpdateResponseData } from "lapyme/models";

let value: ApiPriceListUpdateResponseData = {
  priceList: {
    id: "2958ecfc-7b78-4e54-a06d-c7f62f8663b7",
    name: "<value>",
    isAutomatic: false,
    automaticPricingMode: "base_price_adjustment",
    adjustmentPercentage: 2396.83,
    sourcePriceListId: "70f1cf58-2d51-4353-95d7-f37148b710a2",
    taxInclusive: true,
    createdAt: new Date("2024-07-25T12:54:02.886Z"),
    object: "price_list",
  },
  shouldSyncPrices: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `priceList`                                                                  | [models.ApiSharedObject812fa01669](../models/api-shared-object812fa01669.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `shouldSyncPrices`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |