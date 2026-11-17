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
    salespersonMemberId: "8d0ca0d4-97bc-4114-9b66-badaa310e138",
    priceListId: "82a6217b-8453-4655-b77b-32c7b47c8ab4",
    pricesIncludeTax: false,
    voucherType: 90,
    pricingArsPerUsdRate: "<value>",
    expiresAt: new Date("2024-04-27T17:17:16.110Z"),
    notes: "<value>",
    items: [
      {
        object: "quote_line",
        id: "d46fa3e5-3bdb-4049-a13c-8a0883a0400c",
        productId: "b3993579-688f-4408-a1d5-2cf57287e104",
        warehouseId: "135c79c5-cac1-4faf-abb3-7ab9b4e9eb63",
        quantity: 8622.44,
        unitPrice: 149633,
        discount: {
          type: "amount",
          value: 820748,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ApiQuoteDetailResponseData](../models/api-quote-detail-response-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |