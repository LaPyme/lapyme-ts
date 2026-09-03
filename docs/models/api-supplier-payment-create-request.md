# ApiSupplierPaymentCreateRequest

## Example Usage

```typescript
import { ApiSupplierPaymentCreateRequest } from "lapyme/models";

let value: ApiSupplierPaymentCreateRequest = {
  supplierId: "01976489-a29f-4ae4-bdd0-52b4965beecd",
  pointOfSaleId: "1340b240-188f-415f-991d-70fd44a1fc59",
  paymentDate: "<value>",
  currency: "ARS",
  totalAmount: 508397,
  splits: [
    {
      paymentMethodId: "054e9f37-01f0-47c8-9a76-e799960b0187",
      amount: 489271,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `supplierId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `pointOfSaleId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `paymentDate`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `currency`                                                                     | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `exchangeRate`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `totalAmount`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `settlementCurrency`                                                           | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `settlementTotalAmount`                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `notes`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `splits`                                                                       | [models.ApiSharedObject9e584e0f8a](../models/api-shared-object9e584e0f8a.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `applications`                                                                 | [models.ApiSharedObjectf91176efb5](../models/api-shared-objectf91176efb5.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `journalLineApplications`                                                      | [models.ApiSharedObjectdaa374f786](../models/api-shared-objectdaa374f786.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `creditJournalLineApplications`                                                | [models.ApiSharedObjectdaa374f786](../models/api-shared-objectdaa374f786.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `creditTargetApplications`                                                     | *models.ApiSupplierPaymentCreateRequestCreditTargetApplication*[]              | :heavy_minus_sign:                                                             | N/A                                                                            |
| `creditNoteApplications`                                                       | [models.ApiSharedObjectc2ed2476df](../models/api-shared-objectc2ed2476df.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `advanceApplications`                                                          | [models.ApiSharedObject6447103182](../models/api-shared-object6447103182.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `withholdings`                                                                 | [models.ApiSharedObject4faf4c3ad5](../models/api-shared-object4faf4c3ad5.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |