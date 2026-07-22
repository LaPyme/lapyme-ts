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
      lineType: "product",
      costCenter1Id: "65aa4edd-6cfc-4537-ab24-65a89c340d8a",
      costCenter2Id: "3f7c6b42-f980-4dc7-9ea6-6f7ed547755f",
      costCenter3Id: "4688b6fe-bde5-422e-a613-04af4eed51f8",
    },
  ],
  paymentMethods: [
    {
      methodId: "ae006673-b6b7-4a0d-9819-06929677cdaf",
      amount: 186311,
      description: "miserably oof throughout subsidy er floodlight",
      reference: "<value>",
      feeAmount: 229932,
      terminalId: "8514dae7-5282-4b11-8e2d-ef058a36bb27",
      cardBatchNumber: "<value>",
      cardCouponNumber: "<value>",
      cardInstallmentPlanCode: "<value>",
      cardBrand: "<value>",
      cashSource: {
        type: "safe",
        id: "d6fcb9e4-63c1-459b-9c2f-ed437ee521e3",
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