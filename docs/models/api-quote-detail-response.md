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
    status: "converted",
    convertedSaleId: "dd4f8000-87cb-4bd2-9853-481d836ef926",
    reservation: {
      status: "active",
      reservedThroughDate: new Date("2025-02-24"),
    },
    subtotal: 561726,
    taxAmount: 835817,
    discountAmount: 543283,
    total: 39533,
    createdAt: new Date("2026-10-25T16:14:25.410Z"),
    updatedAt: new Date("2026-02-03T23:55:06.191Z"),
    salespersonMemberId: "1a28d0ca-0d49-47bc-8114-b66badaa310e",
    priceListId: "84682a62-17b8-4453-a655-77b32c7b47c8",
    pricesIncludeTax: true,
    expiresAt: new Date("2026-07-21T16:22:21.673Z"),
    notes: "<value>",
    items: [
      {
        object: "quote_line",
        id: "1f39d46f-a3e5-43bd-9b04-913c8a0883a0",
        productId: "00c8bb39-9357-4968-98f4-081d52cf5728",
        warehouseId: "104a8135-c79c-45ca-ac1f-afbb37ab9b4e",
        quantity: 8972.57,
        unitPrice: 723937,
        discount: {
          type: "percentage",
          value: 2401.9,
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