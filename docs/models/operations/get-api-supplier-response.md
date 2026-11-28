# GetApiSupplierResponse

## Example Usage

```typescript
import { GetApiSupplierResponse } from "lapyme/models/operations";

let value: GetApiSupplierResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "supplier",
      id: "24160535-1436-461f-b366-ad154ff8f628",
      name: "<value>",
      companyName: "Erdman LLC",
      description: "yesterday propound admonish um",
      email: "Bailee89@hotmail.com",
      phone: null,
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      paymentTermDays: 686878,
      paymentTermLabel: "<value>",
      paymentTermInstallmentDays: [
        804611,
      ],
      isActive: true,
      tags: [],
      defaultAccountId: "609d7c5d-6220-41c1-9fbd-768a8fc67fdd",
      country: "Angola",
      provinceId: "<id>",
      city: "Port Leraburgh",
      address: "250 Jamarcus Mount",
      apartment: "<value>",
      postalCode: "12251-7222",
      createdAt: new Date("2025-02-08T13:06:50.735Z"),
      updatedAt: new Date("2026-08-10T06:18:17.446Z"),
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiSupplierDetailResponse](../../models/api-supplier-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |