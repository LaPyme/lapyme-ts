# ApiSupplierPaymentCreateResponse

## Example Usage

```typescript
import { ApiSupplierPaymentCreateResponse } from "lapyme/models";

let value: ApiSupplierPaymentCreateResponse = {
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