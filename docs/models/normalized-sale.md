# NormalizedSale

## Example Usage

```typescript
import { NormalizedSale } from "lapyme/models";

let value: NormalizedSale = {
  customerId: "df84791a-3210-47ed-b232-dd9f69cc9234",
  customerTaxCategoryOverride: "<value>",
  voucherType: 828730,
  pointOfSaleId: "8d4135bd-549b-4427-b678-0896bf12d383",
  registerId: "6111e54d-c5cf-4e38-8275-36095504a376",
  operatorId: "355b7a5d-e33e-4659-b1d0-8d4aaa7dec57",
  invoiceDate: new Date("2025-09-06"),
  dueDate: new Date("2026-09-30"),
  serviceFrom: new Date("2025-08-06"),
  serviceTo: new Date("2024-11-05"),
  currency: "DOL",
  exchangeRate: 4724.71,
  sameCurrencyPayment: true,
  notes: "<value>",
  subtotal: 610118,
  taxAmount: 592817,
  total: 118518,
  exemptAmount: 259926,
  nonTaxedAmount: 359686,
  tributesAmount: 55225,
  nationalPerceptionAmount: 513198,
  grossIncomePerceptionAmount: 799774,
  grossIncomeTaxBreakdown: [],
  municipalPerceptionAmount: 288742,
  internalTributeAmount: 14685,
  uncategorizedVatPerceptionAmount: 992142,
  otherTributeAmount: 649650,
  discountType: "percentage",
  discountValue: 2374.99,
  discountAmount: 770571,
  roundingAdjustment: 689920,
  balance: 5855.06,
  isFullAmountPending: true,
  items: [
    {
      productId: null,
      productName: "<value>",
      sku: "<value>",
      warehouseId: "2392c445-87a6-4229-b269-771398918bad",
      name: null,
      productType: "product",
      quantity: 3573.95,
      unitPrice: 924256,
      unitCost: 846151,
      taxRateId: 729577,
      isExempt: false,
      discount: {
        type: "amount",
        value: 4123.41,
      },
      notes: "<value>",
      accountId: "881640d5-c632-4db8-a5bc-cac8e03d6e07",
      costCenter1Id: "265aa4ed-d6cf-4c53-a7b2-465a89c340d8",
      costCenter2Id: "a3f7c6b4-2f98-40dc-b7ea-66f7ed547755",
      costCenter3Id: "d4688b6f-ebde-4522-ae61-304af4eed51f",
    },
  ],
  paymentMethods: [
    {
      methodId: "cad149a5-8f75-4ac6-8ebf-a6f8b9d218c8",
      amount: 217194,
      description:
        "since redress masterpiece blend about geez entire during minister not",
      reference: "<value>",
      feeAmount: 692331,
      terminalId: "1da62b7f-1693-423f-bc31-309b25e3444d",
      cardBatchNumber: "<value>",
      cardCouponNumber: "<value>",
      cardInstallmentPlanCode: "<value>",
      cardBrand: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `customerId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `customerTaxCategoryOverride`                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `voucherType`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `pointOfSaleId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `registerId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `operatorId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `invoiceDate`                                                                  | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `dueDate`                                                                      | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `serviceFrom`                                                                  | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `serviceTo`                                                                    | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `currency`                                                                     | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `exchangeRate`                                                                 | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `sameCurrencyPayment`                                                          | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `notes`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `subtotal`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `taxAmount`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `total`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `exemptAmount`                                                                 | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `nonTaxedAmount`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `tributesAmount`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `nationalPerceptionAmount`                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `grossIncomePerceptionAmount`                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `grossIncomeTaxBreakdown`                                                      | [models.ApiSharedObject95929ea589](../models/api-shared-object95929ea589.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `municipalPerceptionAmount`                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `internalTributeAmount`                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `uncategorizedVatPerceptionAmount`                                             | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `otherTributeAmount`                                                           | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `discountType`                                                                 | [models.ApiSharedEnum539fdceccc](../models/api-shared-enum539fdceccc.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `discountValue`                                                                | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `discountAmount`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `roundingAdjustment`                                                           | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `balance`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `isFullAmountPending`                                                          | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.ApiSharedObjecte9e792772e](../models/api-shared-objecte9e792772e.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `paymentMethods`                                                               | [models.ApiSharedObject43ed7be04f](../models/api-shared-object43ed7be04f.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |