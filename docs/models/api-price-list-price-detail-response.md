# ApiPriceListPriceDetailResponse

## Example Usage

```typescript
import { ApiPriceListPriceDetailResponse } from "lapyme/models";

let value: ApiPriceListPriceDetailResponse = {
  requestId: "<id>",
  data: {
    object: "price_list_price",
    priceListId: "58345061-a2a9-438d-bb08-60c05fa9d020",
    productId: "3b044fb0-4bc9-4575-91fd-b3e9afd24578",
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
    unitPrice: 510690,
  },
  pricingRevision: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `requestId`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `data`                                       | *models.ApiPriceListPriceDetailResponseData* | :heavy_check_mark:                           | N/A                                          |
| `pricingRevision`                            | *string*                                     | :heavy_check_mark:                           | N/A                                          |