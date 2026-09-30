# CreateApiPriceListResponse

## Example Usage

```typescript
import { CreateApiPriceListResponse } from "lapyme/models/operations";

let value: CreateApiPriceListResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
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
      idempotentReplay: true,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [models.ApiPriceListCreateResponse](../../models/api-price-list-create-response.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |