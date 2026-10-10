# NormalizedSale

## Example Usage

```typescript
import { NormalizedSale } from "lapyme/models";

let value: NormalizedSale = {
  customerId: "df84791a-3210-47ed-b232-dd9f69cc9234",
  customerTaxCategoryOverride: "<value>",
  voucherType: 5363.61,
  pointOfSaleId: "d4135bd5-49b4-4276-b780-896bf12d383c",
  registerId: "111e54dc-5cfe-4382-a753-6095504a3761",
  operatorId: "55b7a5de-33e6-4591-ad08-d4aaa7dec57e",
  invoiceDate: new Date("2026-09-30"),
  dueDate: new Date("2025-12-09"),
  transferType: "SCA",
  serviceFrom: new Date("2025-08-08"),
  serviceTo: new Date("2025-06-01"),
  currency: "ARS",
  exchangeRate: 6101.18,
  sameCurrencyPayment: false,
  notes: "<value>",
  subtotal: 259926,
  taxAmount: 359686,
  total: 55225,
  exemptAmount: 513198,
  nonTaxedAmount: 799774,
  tributesAmount: 141086,
  nationalPerceptionAmount: 288742,
  grossIncomePerceptionAmount: 14685,
  grossIncomeTaxBreakdown: [
    {
      provinceId: 602894,
      amount: 440630,
    },
  ],
  municipalPerceptionAmount: 649650,
  internalTributeAmount: 481065,
  uncategorizedVatPerceptionAmount: 225803,
  otherTributeAmount: 943550,
  discountType: "amount",
  discountValue: 5855.06,
  discountAmount: 327926,
  balance: 5718.05,
  isFullAmountPending: true,
  items: [],
  paymentMethods: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `customerId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `customerTaxCategoryOverride`                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `voucherType`                                                                  | *any*                                                                          | :heavy_check_mark:                                                             | N/A                                                                            |
| `pointOfSaleId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `registerId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `operatorId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `invoiceDate`                                                                  | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `dueDate`                                                                      | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `transferType`                                                                 | [models.ApiSharedEnum447a859a74](../models/api-shared-enum447a859a74.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `serviceFrom`                                                                  | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `serviceTo`                                                                    | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `currency`                                                                     | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
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
| `items`                                                                        | [models.ApiSharedObjectd835b52c6b](../models/api-shared-objectd835b52c6b.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `paymentMethods`                                                               | [models.ApiSharedObject3d3dc47592](../models/api-shared-object3d3dc47592.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |