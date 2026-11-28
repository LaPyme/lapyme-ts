# ApiQuoteWriteResponse

## Example Usage

```typescript
import { ApiQuoteWriteResponse } from "lapyme/models";

let value: ApiQuoteWriteResponse = {
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
    salespersonId: null,
    salespersonMemberId: "c39932b6-8174-455b-8c8d-1b3c98b846fc",
    priceListId: "ea1f39d4-6fa3-4e53-abdb-04913c8a0883",
    pricesIncludeTax: null,
    voucherType: 90,
    pricingArsPerUsdRate: "<value>",
    expiresAt: null,
    notes: null,
    items: [
      {
        object: "quote_line",
        id: "8bb39935-7968-48f4-8081-d52cf57287e1",
        productId: "a8135c79-c5ca-4c1f-9afb-b37ab9b4e9eb",
        warehouseId: "bd25ddc2-175d-48c1-b891-90ad3eba3edf",
        quantity: 4965.66,
        unitPrice: 442206,
        discount: {
          type: "percentage",
          value: 1104.31,
        },
      },
    ],
    idempotentReplay: true,
  },
  warnings: [
    {
      productId: "e3eb9db9-c3ef-4f54-9cb9-d8d29ca2924a",
      warehouseId: "92756d0a-dfe1-44f1-8960-6e7cafffe761",
      requestedQuantity: 2941.47,
      availableQuantity: 3090.55,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiQuoteWriteResponseData](../models/api-quote-write-response-data.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `warnings`                                                                             | [models.ApiQuoteWriteResponseWarning](../models/api-quote-write-response-warning.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |