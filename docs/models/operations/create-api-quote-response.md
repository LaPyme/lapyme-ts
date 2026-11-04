# CreateApiQuoteResponse

## Example Usage

```typescript
import { CreateApiQuoteResponse } from "lapyme/models/operations";

let value: CreateApiQuoteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
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
      total: 378949,
      createdAt: new Date("2024-01-06T19:55:12.373Z"),
      updatedAt: new Date("2024-03-11T09:24:04.983Z"),
      salespersonMemberId: "b1dc3993-2b68-4174-955b-c8d1b3c98b84",
      priceListId: "c1dea1f3-9d46-4fa3-ae53-bdb04913c8a0",
      pricesIncludeTax: true,
      pricingArsPerUsdRate: "<value>",
      expiresAt: null,
      notes: "<value>",
      items: [],
      idempotentReplay: true,
    },
    warnings: [
      {
        productId: "8bb39935-7968-48f4-8081-d52cf57287e1",
        warehouseId: "4a8135c7-9c5c-4ac1-afaf-bb37ab9b4e9e",
        requestedQuantity: 3882.75,
        availableQuantity: 2401.9,
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.ApiQuoteWriteResponse](../../models/api-quote-write-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |