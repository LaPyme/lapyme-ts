# GetApiQuoteByIdResponse

## Example Usage

```typescript
import { GetApiQuoteByIdResponse } from "lapyme/models/operations";

let value: GetApiQuoteByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
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
      total: 938574,
      createdAt: new Date("2026-02-03T23:55:06.191Z"),
      updatedAt: new Date("2026-02-03T10:09:59.669Z"),
      salespersonMemberId: "a28d0ca0-d497-4bc1-814b-66badaa310e1",
      priceListId: "4682a621-7b84-4536-a557-7b32c7b47c8a",
      pricesIncludeTax: false,
      pricingArsPerUsdRate: "<value>",
      expiresAt: new Date("2025-12-06T14:50:35.667Z"),
      notes: "<value>",
      items: [],
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiQuoteDetailResponse](../../models/api-quote-detail-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |