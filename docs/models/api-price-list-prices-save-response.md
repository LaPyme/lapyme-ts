# ApiPriceListPricesSaveResponse

## Example Usage

```typescript
import { ApiPriceListPricesSaveResponse } from "lapyme/models";

let value: ApiPriceListPricesSaveResponse = {
  requestId: "<id>",
  data: {
    object: "price_list_prices_update",
    priceListId: "ddc00769-e178-4ab4-908e-16bad8798302",
    updated: 763914,
    removed: 70909,
    idempotentReplay: true,
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [models.ApiPriceListPricesSaveResponseData](../models/api-price-list-prices-save-response-data.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `warnings`                                                                                         | *any*[]                                                                                            | :heavy_check_mark:                                                                                 | N/A                                                                                                |