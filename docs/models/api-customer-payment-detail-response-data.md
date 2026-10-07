# ApiCustomerPaymentDetailResponseData

## Example Usage

```typescript
import { ApiCustomerPaymentDetailResponseData } from "lapyme/models";

let value: ApiCustomerPaymentDetailResponseData = {
  customerPayment: {
    id: "2cc2547c-6761-4400-8b17-6e5f34eca7b8",
    type: "customer",
    status: "active",
    contactId: "1a097f2f-4bfb-40dc-b3cd-8fe4a7e2fcc5",
    contactName: "<value>",
    paymentNumber: 790450,
    formattedPaymentNumber: "<value>",
    paymentDate: "<value>",
    currency: "ARS",
    totalAmount: 783901,
    balance: 111225,
    createdAt: new Date("2024-05-01T06:17:09.879Z"),
    createdByName: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `customerPayment`                                                            | [models.ApiSharedObjectc2ec616107](../models/api-shared-objectc2ec616107.md) | :heavy_check_mark:                                                           | N/A                                                                          |