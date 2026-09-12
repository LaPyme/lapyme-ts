# ApiCustomerPaymentCreateRequest

## Example Usage

```typescript
import { ApiCustomerPaymentCreateRequest } from "lapyme/models";

let value: ApiCustomerPaymentCreateRequest = {
  customerId: "2dcbcb1f-52c6-4cc4-9744-126aac145d21",
  pointOfSaleId: "e0465db5-ff4f-4dfe-bbb2-80a68619260d",
  paymentDate: "<value>",
  currency: "ARS",
  totalAmount: 816112,
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
| `customerId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `pointOfSaleId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `paymentDate`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `currency`                                                                     | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `exchangeRate`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `totalAmount`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `settlementCurrency`                                                           | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `settlementTotalAmount`                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sessionId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `notes`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `splits`                                                                       | [models.ApiSharedObject9e584e0f8a](../models/api-shared-object9e584e0f8a.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `applications`                                                                 | [models.Application](../models/application.md)[]                               | :heavy_minus_sign:                                                             | N/A                                                                            |
| `journalLineApplications`                                                      | [models.ApiSharedObjectdaa374f786](../models/api-shared-objectdaa374f786.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `creditJournalLineApplications`                                                | [models.ApiSharedObjectdaa374f786](../models/api-shared-objectdaa374f786.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `creditNoteApplications`                                                       | [models.CreditNoteApplication](../models/credit-note-application.md)[]         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `advanceApplications`                                                          | [models.ApiSharedObject6447103182](../models/api-shared-object6447103182.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `withholdings`                                                                 | [models.ApiSharedObject4faf4c3ad5](../models/api-shared-object4faf4c3ad5.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |