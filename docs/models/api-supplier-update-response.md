# ApiSupplierUpdateResponse

## Example Usage

```typescript
import { ApiSupplierUpdateResponse } from "lapyme/models";

let value: ApiSupplierUpdateResponse = {
  requestId: "<id>",
  data: {
    supplier: {
      object: "supplier",
      id: "fea26d0a-4f2c-43ec-b7c1-14fe91c39c0c",
      name: "<value>",
      companyName: "Wiegand, Nikolaus and Bradtke",
      description: "sightseeing statement waterspout square plumber ah ha",
      email: "Hans79@hotmail.com",
      phone: "(868) 929-4302",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      paymentTermId: "<id>",
      paymentTermDays: 100217,
      paymentTermLabel: "<value>",
      paymentTermInstallmentDays: [
        174204,
        176779,
        957437,
      ],
      isActive: true,
      tags: [],
      defaultAccountId: null,
      country: "Tajikistan",
      provinceId: "<id>",
      city: null,
      address: null,
      apartment: "<value>",
      postalCode: "68534-3511",
      createdAt: new Date("2024-10-17T09:21:26.745Z"),
      updatedAt: new Date("2026-07-25T08:45:32.215Z"),
    },
  },
  warnings: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiSupplierUpdateResponseData](../models/api-supplier-update-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `warnings`                                                                             | *any*[]                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |