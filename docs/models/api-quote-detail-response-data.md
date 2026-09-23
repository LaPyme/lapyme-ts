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
  status: "sent",
  convertedSaleId: null,
  reservation: null,
  subtotal: 266801,
  taxAmount: 409603,
  discountAmount: 713088,
  total: 468855,
  createdAt: new Date("2024-06-19T16:54:12.951Z"),
  updatedAt: new Date("2025-07-04T19:47:01.340Z"),
  salespersonMemberId: "f9e0151f-4b64-4c46-967e-ff40bf8ac381",
  priceListId: "e0649041-9d9f-4579-ae0b-89765655ee12",
  pricesIncludeTax: false,
  expiresAt: new Date("2026-05-15T14:26:46.633Z"),
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