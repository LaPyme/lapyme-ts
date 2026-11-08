# SaveApiPriceListPricesResponse

## Example Usage

```typescript
import { SaveApiPriceListPricesResponse } from "lapyme/models/operations";

let value: SaveApiPriceListPricesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "price_list_prices_update",
      priceListId: "ddc00769-e178-4ab4-908e-16bad8798302",
      updated: 763914,
      removed: 70909,
      idempotentReplay: true,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [models.ApiPriceListPricesSaveResponse](../../models/api-price-list-prices-save-response.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |