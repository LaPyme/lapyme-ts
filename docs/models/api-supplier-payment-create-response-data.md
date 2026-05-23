# ApiSupplierPaymentCreateResponseData

## Example Usage

```typescript
import { ApiSupplierPaymentCreateResponseData } from "lapyme/models";

let value: ApiSupplierPaymentCreateResponseData = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `supplierPayment`                                                            | [models.ApiSharedObjectdd60033a21](../models/api-shared-objectdd60033a21.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |