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
  serviceFrom: new Date("2025-07-01"),
  serviceTo: new Date("2025-08-08"),
  currency: "PES",
  exchangeRate: 1672.45,
  sameCurrencyPayment: false,
  notes: "<value>",
  subtotal: 592817,
  taxAmount: 118518,
  total: 259926,
  exemptAmount: 359686,
  nonTaxedAmount: 55225,
  tributesAmount: 513198,
  nationalPerceptionAmount: 799774,
  grossIncomePerceptionAmount: 141086,
  grossIncomeTaxBreakdown: [],
  municipalPerceptionAmount: 14685,
  internalTributeAmount: 992142,
  uncategorizedVatPerceptionAmount: 649650,
  otherTributeAmount: 481065,
  discountType: "amount",
  discountValue: 7705.71,
  discountAmount: 689920,
  balance: 5855.06,
  isFullAmountPending: true,
  items: [
    {
      productId: "2fae0066-73b6-4b7a-a0d8-1906929677cd",
      productName: "<value>",
      sku: "<value>",
      warehouseId: "77c813f1-7bc9-4a75-af6c-6672dd64813d",
      name: null,
      productType: "combo",
      quantity: 4207.27,
      unitPrice: 195040,
      unitCost: 631396,
      taxRateId: 539458,
      isExempt: true,
      discount: {
        type: "percentage",
        value: 3381.28,
      },
      notes: "<value>",
      accountId: "3f8514da-e752-482b-811e-2def058a36bb",
      lineType: "shipping",
      costCenter1Id: "a9179ad6-fcb9-4e46-b3c1-59bc2fed437e",
      costCenter2Id: "21e37a84-bb7b-4e18-822a-77b83dfd4bfe",
      costCenter3Id: "2da423a7-6c9b-4903-8661-3632e71534c5",
    },
  ],
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