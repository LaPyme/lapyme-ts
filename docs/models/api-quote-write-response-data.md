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
  status: "converted",
  convertedSaleId: "3d2051da-6e3b-4473-b4c7-da0cdea5c461",
  reservation: {
    status: "active",
    reservedThroughDate: new Date("2025-02-24"),
  },
  subtotal: 168858,
  taxAmount: 10860,
  discountAmount: 655237,
  total: 580352,
  createdAt: new Date("2025-08-11T02:17:30.546Z"),
  updatedAt: new Date("2026-08-12T05:09:35.349Z"),
  salespersonMemberId: "baf47a4b-a1f8-4673-a22f-6437b79b8ccf",
  priceListId: "bb8bae7a-aec7-4cff-b89a-aab2349b1f8f",
  pricesIncludeTax: true,
  expiresAt: new Date("2024-01-28T12:39:20.685Z"),
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
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObjecta51cd840c4](../models/api-shared-objecta51cd840c4.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `idempotentReplay`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |