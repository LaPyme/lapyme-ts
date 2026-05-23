# ApiCustomerPaymentCreateResponse

## Example Usage

```typescript
import { ApiCustomerPaymentCreateResponse } from "lapyme/models";

let value: ApiCustomerPaymentCreateResponse = {
  requestId: "<id>",
  data: {
    customerPayment: {
      id: "2cc2547c-6761-4400-8b17-6e5f34eca7b8",
      type: "customer",
      status: "active",
      contactId: "1a097f2f-4bfb-40dc-b3cd-8fe4a7e2fcc5",
      contactName: "<value>",
      paymentNumber: 790450,
      formattedPaymentNumber: "<value>",
      paymentDate: "<value>",
      currency: "PES",
      totalAmount: 783901,
      balance: 111225,
      createdAt: new Date("2024-05-01T06:17:09.879Z"),
      createdByName: "<value>",
    },
    idempotentReplay: true,
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `data`                                                                                                | [models.ApiCustomerPaymentCreateResponseData](../models/api-customer-payment-create-response-data.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `warnings`                                                                                            | *any*[]                                                                                               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |