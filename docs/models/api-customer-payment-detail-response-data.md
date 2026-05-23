# ApiCustomerPaymentDetailResponseData

## Example Usage

```typescript
import { ApiCustomerPaymentDetailResponseData } from "lapyme/models";

let value: ApiCustomerPaymentDetailResponseData = {
  customerPayment: {
    id: "d65c8d3d-9351-4cc3-9a71-3f90c1210440",
    type: "customer",
    status: "active",
    contactId: "10dfe69f-00a3-4e47-afc1-d87b0ec18610",
    contactName: null,
    paymentNumber: 412636,
    formattedPaymentNumber: null,
    paymentDate: "<value>",
    currency: "PES",
    totalAmount: 71482,
    balance: 976692,
    createdAt: new Date("2024-12-04T16:27:15.015Z"),
    createdByName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `customerPayment`                                                                                                            | [models.ApiCustomerPaymentDetailResponseCustomerPayment](../models/api-customer-payment-detail-response-customer-payment.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |