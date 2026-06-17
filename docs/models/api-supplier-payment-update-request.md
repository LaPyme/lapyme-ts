# ApiSupplierPaymentUpdateRequest

## Example Usage

```typescript
import { ApiSupplierPaymentUpdateRequest } from "lapyme/models";

let value: ApiSupplierPaymentUpdateRequest = {
  supplierId: "c2f6b6f1-f532-4dce-bc08-2c621bea6b11",
  pointOfSaleId: "a09ab843-ea74-4753-aa2c-0328510cfdfc",
  paymentDate: "<value>",
  currency: "DOL",
  totalAmount: 800566,
  splits: [
    {
      paymentMethodId: "8eb4ec5d-9bf3-4b65-a838-e1aaf4b550a5",
      amount: 122094,
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
| `currency`                                                                     | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `exchangeRate`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `totalAmount`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `settlementCurrency`                                                           | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `settlementTotalAmount`                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `notes`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `splits`                                                                       | [models.Split](../models/split.md)[]                                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `applications`                                                                 | [models.ApiSharedObjectf91176efb5](../models/api-shared-objectf91176efb5.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `journalLineApplications`                                                      | [models.ApiSharedObjectdaa374f786](../models/api-shared-objectdaa374f786.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `creditJournalLineApplications`                                                | [models.ApiSharedObjectdaa374f786](../models/api-shared-objectdaa374f786.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `creditTargetApplications`                                                     | *models.ApiSupplierPaymentUpdateRequestCreditTargetApplication*[]              | :heavy_minus_sign:                                                             | N/A                                                                            |
| `creditNoteApplications`                                                       | [models.ApiSharedObjectc2ed2476df](../models/api-shared-objectc2ed2476df.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `advanceApplications`                                                          | [models.ApiSharedObject6447103182](../models/api-shared-object6447103182.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `withholdings`                                                                 | [models.ApiSharedObject4faf4c3ad5](../models/api-shared-object4faf4c3ad5.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |