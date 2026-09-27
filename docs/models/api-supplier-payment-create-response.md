# ApiSupplierPaymentCreateResponse

## Example Usage

```typescript
import { ApiSupplierPaymentCreateResponse } from "lapyme/models";

let value: ApiSupplierPaymentCreateResponse = {
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
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `data`                                                                                                | [models.ApiSupplierPaymentCreateResponseData](../models/api-supplier-payment-create-response-data.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `warnings`                                                                                            | *any*[]                                                                                               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |