# GetApiCustomerPaymentResponse

## Example Usage

```typescript
import { GetApiCustomerPaymentResponse } from "lapyme/models/operations";

let value: GetApiCustomerPaymentResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
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
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ApiCustomerPaymentDetailResponse](../../models/api-customer-payment-detail-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |