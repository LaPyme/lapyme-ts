# ApiQuoteWriteResponseData

## Example Usage

```typescript
import { ApiQuoteWriteResponseData } from "lapyme/models";

let value: ApiQuoteWriteResponseData = {
  object: "quote",
  id: "98363395-5cbc-4e71-9106-d0191d96828b",
  number: 933038,
  formattedNumber: "<value>",
  customerId: "9452e948-43fc-44ad-8b2f-a91b3a4fa2b2",
  currency: "USD",
  status: "sent",
  convertedSaleId: "d2051da6-e3b4-4734-8c7d-a0cdea5c461f",
  reservation: {
    status: "active",
    reservedThroughDate: new Date("2024-02-11"),
  },
  subtotal: 10860,
  taxAmount: 655237,
  discountAmount: 580352,
  total: 536584,
  createdAt: new Date("2026-08-12T05:09:35.349Z"),
  updatedAt: new Date("2025-04-04T19:56:22.020Z"),
  salespersonMemberId: "af47a4ba-1f86-4732-a2f6-437b79b8ccf8",
  priceListId: "b8bae7aa-ec7c-4ff8-a9aa-ab2349b1f8fe",
  pricesIncludeTax: null,
  pricingArsPerUsdRate: "<value>",
  expiresAt: null,
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
  idempotentReplay: true,
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
| `idempotentReplay`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |