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
  balance: 6899.2,
  isFullAmountPending: false,
  items: [],
  paymentMethods: [
    {
      methodId: "22fae006-673b-46b7-ba0d-81906929677c",
      amount: 652697,
      description: "daddy over idle provided like caring",
      reference: "<value>",
      feeAmount: 338128,
      terminalId: "b3f8514d-ae75-4282-ab11-e2def058a36b",
      cardBatchNumber: "<value>",
      cardCouponNumber: "<value>",
      cardInstallmentPlanCode: "<value>",
      cardBrand: "<value>",
      cashSource: {
        type: "register",
        id: "79ad6fcb-9e46-43c1-859b-c2fed437ee52",
      },
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
| `balance`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `isFullAmountPending`                                                          | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.ApiSharedObject55e2bcf4a7](../models/api-shared-object55e2bcf4a7.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `paymentMethods`                                                               | [models.ApiSharedObjecte4ddc41067](../models/api-shared-objecte4ddc41067.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |