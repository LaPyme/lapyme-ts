# ApiSupplierPaymentDetailResponseData

## Example Usage

```typescript
import { ApiSupplierPaymentDetailResponseData } from "lapyme/models";

let value: ApiSupplierPaymentDetailResponseData = {
  supplierPayment: {
    id: "3ecc553f-f5c6-493e-bfa6-0b4cee2998f7",
    type: "supplier",
    status: "active",
    contactId: "d4dfd493-7046-43fe-9cce-3175c9ab669b",
    contactName: "<value>",
    paymentNumber: 349810,
    formattedPaymentNumber: "<value>",
    paymentDate: "<value>",
    currency: "PES",
    totalAmount: 617675,
    balance: 513258,
    createdAt: new Date("2026-02-15T06:10:17.413Z"),
    createdByName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `supplierPayment`                                                                                                            | [models.ApiSupplierPaymentDetailResponseSupplierPayment](../models/api-supplier-payment-detail-response-supplier-payment.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |