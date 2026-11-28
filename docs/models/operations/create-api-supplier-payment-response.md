# CreateApiSupplierPaymentResponse

## Example Usage

```typescript
import { CreateApiSupplierPaymentResponse } from "lapyme/models/operations";

let value: CreateApiSupplierPaymentResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      supplierPayment: {
        id: "1f9267fe-f042-4713-9d87-6a08873f83ab",
        type: "supplier",
        status: "voided",
        contactId: "dec371dd-2d7f-4c13-8f2c-72ddd171fe32",
        contactName: "<value>",
        paymentNumber: 772889,
        formattedPaymentNumber: "<value>",
        paymentDate: "<value>",
        currency: "ARS",
        totalAmount: 958454,
        balance: 509013,
        createdAt: new Date("2024-12-27T13:40:31.877Z"),
        createdByName: "<value>",
      },
      idempotentReplay: false,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ApiSupplierPaymentCreateResponse](../../models/api-supplier-payment-create-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |