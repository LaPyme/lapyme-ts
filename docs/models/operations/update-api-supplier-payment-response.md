# UpdateApiSupplierPaymentResponse

## Example Usage

```typescript
import { UpdateApiSupplierPaymentResponse } from "lapyme/models/operations";

let value: UpdateApiSupplierPaymentResponse = {
  headers: {
    "key": [
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
| `result`                                                                                        | [models.ApiSupplierPaymentUpdateResponse](../../models/api-supplier-payment-update-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |