# ApiPriceListCreateResponseData

## Example Usage

```typescript
import { ApiPriceListCreateResponseData } from "lapyme/models";

let value: ApiPriceListCreateResponseData = {
  priceList: {
    id: "2958ecfc-7b78-4e54-a06d-c7f62f8663b7",
    name: "<value>",
    isAutomatic: false,
    automaticPricingMode: "base_price_adjustment",
    adjustmentPercentage: 2396.83,
    taxInclusive: true,
    createdAt: new Date("2025-04-30T20:16:20.962Z"),
    object: "price_list",
  },
  idempotentReplay: false,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `priceList`                                                                                          | [models.ApiPriceListCreateResponsePriceList](../models/api-price-list-create-response-price-list.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `idempotentReplay`                                                                                   | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |