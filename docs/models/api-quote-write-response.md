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
    status: "sent",
    convertedSaleId: "d58b9478-9b6f-4387-99a7-a900a2baa5dc",
    reservation: {
      status: "active",
      reservedThroughDate: new Date("2025-02-24"),
    },
    subtotal: 37849,
    taxAmount: 339981,
    discountAmount: 862827,
    total: 310644,
    createdAt: new Date("2025-02-19T07:53:10.156Z"),
    updatedAt: new Date("2024-01-06T19:55:12.373Z"),
    salespersonMemberId: null,
    priceListId: "b1dc3993-2b68-4174-955b-c8d1b3c98b84",
    pricesIncludeTax: false,
    expiresAt: new Date("2026-07-02T23:24:22.997Z"),
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
    idempotentReplay: false,
  },
  warnings: [
    {
      productId: "25ddc217-5d8c-4189-9190-ad3eba3edfc7",
      warehouseId: "b014fe3e-b9db-49c3-8eff-54cb9d8d29ca",
      requestedQuantity: 6238.41,
      availableQuantity: 1795.9,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiQuoteWriteResponseData](../models/api-quote-write-response-data.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `warnings`                                                                     | [models.Warning](../models/warning.md)[]                                       | :heavy_check_mark:                                                             | N/A                                                                            |