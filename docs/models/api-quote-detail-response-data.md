# ApiQuoteDetailResponseData

## Example Usage

```typescript
import { ApiQuoteDetailResponseData } from "lapyme/models";

let value: ApiQuoteDetailResponseData = {
  object: "quote",
  id: "beb7d65a-28db-4912-80c6-fb09678d8702",
  number: 371359,
  formattedNumber: "<value>",
  customerId: "c4cd7a36-76f3-43a8-a1e8-9726f2e5ecad",
  currency: "ARS",
  status: "draft",
  convertedSaleId: null,
  reservation: {
    status: "active",
    reservedThroughDate: new Date("2024-02-11"),
  },
  subtotal: 409603,
  taxAmount: 713088,
  discountAmount: 468855,
  total: 155752,
  createdAt: new Date("2025-07-04T19:47:01.340Z"),
  updatedAt: new Date("2026-06-24T17:08:56.381Z"),
  salespersonMemberId: "9e0151f4-b64c-4466-97ef-f40bf8ac3815",
  priceListId: "06490419-d9f5-479e-a0b8-9765655ee128",
  pricesIncludeTax: true,
  pricingArsPerUsdRate: "<value>",
  expiresAt: new Date("2026-04-09T03:55:06.768Z"),
  notes: "<value>",
  items: [
    {
      object: "quote_line",
      id: "552f75b1-29b5-43ba-8d16-a9dd91ac103b",
      productId: "01303d1f-6327-48af-9d20-9ea1e857e861",
      warehouseId: "520b90b1-604c-4ab9-9bb1-fbc3b2a56ba9",
      quantity: 7631.68,
      unitPrice: 998290,
      discount: {
        type: "amount",
        value: 870629,
      },
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"quote"*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `formattedNumber`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnumfbc137f7cc](../models/api-shared-enumfbc137f7cc.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `convertedSaleId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reservation`                                                                                 | [models.ApiSharedObjectc82a2ff2d4](../models/api-shared-objectc82a2ff2d4.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subtotal`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discountAmount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `salespersonMemberId`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priceListId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pricesIncludeTax`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pricingArsPerUsdRate`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObjectb35a323e54](../models/api-shared-objectb35a323e54.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |