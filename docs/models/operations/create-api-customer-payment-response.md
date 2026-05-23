# CreateApiCustomerPaymentResponse

## Example Usage

```typescript
import { CreateApiCustomerPaymentResponse } from "lapyme/models/operations";

let value: CreateApiCustomerPaymentResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
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
    ],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ApiCustomerPaymentCreateResponse](../../models/api-customer-payment-create-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |