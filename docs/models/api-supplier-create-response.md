# ApiSupplierCreateResponse

## Example Usage

```typescript
import { ApiSupplierCreateResponse } from "lapyme/models";

let value: ApiSupplierCreateResponse = {
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
      isActive: true,
      tags: [
        {
          object: "tag",
          id: "d17aba97-5a39-49b6-b021-2a82b75ca998",
          scope: "purchase_order",
          name: "<value>",
          slug: "<value>",
          color: "yellow",
          description: "natural huzzah heavenly",
          archivedAt: new Date("2024-12-06T02:21:59.305Z"),
          createdAt: new Date("2024-02-28T10:14:14.640Z"),
          updatedAt: new Date("2025-08-18T02:43:21.277Z"),
        },
      ],
      country: "Chile",
      provinceId: "<id>",
      city: "East Audreanneburgh",
      address: "1082 Pine Street",
      apartment: "<value>",
      postalCode: "43511",
      createdAt: new Date("2024-10-17T09:21:26.745Z"),
      updatedAt: new Date("2026-07-25T08:45:32.215Z"),
    },
    idempotentReplay: false,
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiSupplierCreateResponseData](../models/api-supplier-create-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `warnings`                                                                             | *any*[]                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |