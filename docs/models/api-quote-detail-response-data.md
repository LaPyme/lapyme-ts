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
  discountPercentage: 5025.77,
  total: 826382,
  createdAt: new Date("2026-11-23T18:52:42.158Z"),
  updatedAt: new Date("2025-10-10T03:13:19.296Z"),
  salespersonMemberId: "0151f4b6-4c46-467e-8ff4-0bf8ac38156e",
  priceListId: "490419d9-f579-4e0b-8897-65655ee128ab",
  pricesIncludeTax: false,
  voucherType: 90,
  pricingArsPerUsdRate: "<value>",
  expiresAt: new Date("2025-07-26T09:08:09.221Z"),
  notes: null,
  items: [],
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