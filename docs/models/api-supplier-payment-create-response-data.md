# ApiSupplierPaymentCreateResponseData

## Example Usage

```typescript
import { ApiSupplierPaymentCreateResponseData } from "lapyme/models";

let value: ApiSupplierPaymentCreateResponseData = {
  supplierPayment: {
    id: "1f9267fe-f042-4713-9d87-6a08873f83ab",
    type: "supplier",
    status: "voided",
    contactId: "dec371dd-2d7f-4c13-8f2c-72ddd171fe32",
    contactName: "<value>",
    paymentNumber: 772889,
    formattedPaymentNumber: "<value>",
    paymentDate: "<value>",
    currency: "PES",
    totalAmount: 958454,
    balance: 509013,
    createdAt: new Date("2024-12-27T13:40:31.877Z"),
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