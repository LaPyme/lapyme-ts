# GetApiSupplierResponse

## Example Usage

```typescript
import { GetApiSupplierResponse } from "lapyme/models/operations";

let value: GetApiSupplierResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
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
      paymentTermId: "<id>",
      paymentTermDays: 540540,
      paymentTermLabel: "<value>",
      paymentTermInstallmentDays: [
        955225,
        274000,
        273124,
      ],
      isActive: true,
      tags: [],
      defaultAccountId: "d7c5d622-01c1-4fbd-8768-a8fc67fdd5d0",
      country: "Central African Republic",
      provinceId: "<id>",
      city: "Fort Raquel",
      address: "1245 Elizabeth Shore",
      apartment: "<value>",
      postalCode: "51722",
      createdAt: new Date("2024-09-16T19:49:42.474Z"),
      updatedAt: new Date("2025-02-08T13:06:50.735Z"),
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiSupplierDetailResponse](../../models/api-supplier-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |