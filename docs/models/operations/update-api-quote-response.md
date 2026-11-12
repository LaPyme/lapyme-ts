# UpdateApiQuoteResponse

## Example Usage

```typescript
import { UpdateApiQuoteResponse } from "lapyme/models/operations";

let value: UpdateApiQuoteResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "quote",
      id: "e1f6792d-bdf1-436e-879a-57d2a35b6aee",
      number: 282162,
      formattedNumber: "<value>",
      customerId: "a0d2c022-bf76-43ee-a6be-ecbda2bdb3f5",
      currency: "ARS",
      status: "expired",
      convertedSaleId: "58b94789-b6f3-4879-9a7a-900a2baa5dc6",
      reservation: {
        status: "active",
        reservedThroughDate: new Date("2024-02-11"),
      },
      subtotal: 339981,
      taxAmount: 862827,
      discountAmount: 310644,
      discountPercentage: 53.19,
      total: 64226,
      createdAt: new Date("2024-04-26T07:13:56.707Z"),
      updatedAt: new Date("2026-03-18T01:10:12.495Z"),
      salespersonMemberId: null,
      priceListId: "c39932b6-8174-455b-8c8d-1b3c98b846fc",
      pricesIncludeTax: false,
      voucherType: 90,
      pricingArsPerUsdRate: "<value>",
      expiresAt: new Date("2026-11-18T07:52:27.190Z"),
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
      idempotentReplay: false,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.ApiQuoteWriteResponse](../../models/api-quote-write-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |