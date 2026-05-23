# CreateApiSupplierPaymentResponse

## Example Usage

```typescript
import { CreateApiSupplierPaymentResponse } from "lapyme/models/operations";

let value: CreateApiSupplierPaymentResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      supplierPayment: {
        id: "c0f7cbd9-3523-45b2-986a-d3df2cb86b1a",
        type: "supplier",
        status: "active",
        contactId: "77d392a7-1168-43de-9c41-fa1ad75d01f4",
        contactName: "<value>",
        paymentNumber: 694729,
        formattedPaymentNumber: null,
        paymentDate: "<value>",
        currency: "PES",
        totalAmount: 163801,
        balance: 471858,
        createdAt: new Date("2026-03-29T02:04:46.450Z"),
        createdByName: "<value>",
      },
      idempotentReplay: true,
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