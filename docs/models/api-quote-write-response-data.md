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
  discountPercentage: 8706.34,
  total: 419554,
  createdAt: new Date("2026-02-07T09:30:58.923Z"),
  updatedAt: new Date("2025-11-17T18:39:38.464Z"),
  salespersonMemberId: "47a4ba1f-8673-422f-a643-7b79b8ccf8ab",
  priceListId: "bae7aaec-7cff-489a-baab-2349b1f8feb0",
  pricesIncludeTax: null,
  voucherType: 90,
  pricingArsPerUsdRate: "<value>",
  expiresAt: new Date("2025-01-13T20:52:45.813Z"),
  notes: "<value>",
  items: [],
  idempotentReplay: false,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                       | *"quote"*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `number`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `formattedNumber`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `customerId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `currency`                                                                                                     | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [models.ApiSharedEnumfbc137f7cc](../models/api-shared-enumfbc137f7cc.md)                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `convertedSaleId`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `reservation`                                                                                                  | [models.ApiSharedObjectc82a2ff2d4](../models/api-shared-objectc82a2ff2d4.md)                                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `subtotal`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `taxAmount`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `discountAmount`                                                                                               | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Descuento global aplicado, en centavos.                                                                        |
| `discountPercentage`                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Porcentaje del descuento global tal como se cargó. null si el descuento es un importe fijo o no hay descuento. |
| `total`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `salespersonMemberId`                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `priceListId`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `pricesIncludeTax`                                                                                             | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `voucherType`                                                                                                  | *90*                                                                                                           | :heavy_check_mark:                                                                                             | Comprobante del presupuesto: 90 es un Comprobante X y null una Factura.                                        |
| `pricingArsPerUsdRate`                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `expiresAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `notes`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `items`                                                                                                        | [models.ApiSharedObject6e2dab2a90](../models/api-shared-object6e2dab2a90.md)[]                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `idempotentReplay`                                                                                             | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |