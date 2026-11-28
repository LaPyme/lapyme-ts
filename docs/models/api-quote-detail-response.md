# ApiQuoteDetailResponse

## Example Usage

```typescript
import { ApiQuoteDetailResponse } from "lapyme/models";

let value: ApiQuoteDetailResponse = {
  requestId: "<id>",
  data: {
    object: "quote",
    id: "9cbff48f-aba4-4fbc-a9f5-78136f1f24c0",
    number: 671034,
    formattedNumber: "<value>",
    customerId: "0c5cd6ba-8817-4f1a-96d2-0d2efe05e1b6",
    currency: "USD",
    status: "rejected",
    convertedSaleId: "d4f80008-7cbb-4d28-a534-81d836ef9266",
    reservation: {
      status: "active",
      reservedThroughDate: new Date("2024-02-11"),
    },
    subtotal: 835817,
    taxAmount: 543283,
    discountAmount: 39533,
    discountPercentage: 6979.9,
    total: 697467,
    createdAt: new Date("2024-05-10T00:10:37.201Z"),
    updatedAt: new Date("2026-01-16T17:05:27.054Z"),
    salespersonId: "8d0ca0d4-97bc-4114-9b66-badaa310e138",
    salespersonMemberId: "82a6217b-8453-4655-b77b-32c7b47c8ab4",
    priceListId: "eaa1f814-22ef-4bcc-8ac0-f6d132cd5ede",
    pricesIncludeTax: true,
    voucherType: 90,
    pricingArsPerUsdRate: "<value>",
    expiresAt: new Date("2026-10-09T09:57:34.972Z"),
    notes: "<value>",
    items: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ApiQuoteDetailResponseData](../models/api-quote-detail-response-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |