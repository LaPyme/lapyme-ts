# GetApiSupplierResponse

## Example Usage

```typescript
import { GetApiSupplierResponse } from "lapyme/models/operations";

let value: GetApiSupplierResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
      isActive: true,
      tags: [
        {
          object: "tag",
          id: "c4a0b478-b0e9-40aa-a06f-be28f0ddf586",
          scope: "purchase",
          name: "<value>",
          slug: "<value>",
          color: "teal",
          description: "norm youthful ugh drive victoriously",
          archivedAt: new Date("2026-10-03T04:47:37.645Z"),
          createdAt: new Date("2026-03-15T05:11:35.797Z"),
          updatedAt: new Date("2025-02-21T13:32:00.515Z"),
        },
      ],
      country: "Eritrea",
      provinceId: "<id>",
      city: "North Letha",
      address: "7384 Broderick Branch",
      apartment: null,
      postalCode: "96844",
      createdAt: new Date("2025-07-20T05:44:29.812Z"),
      updatedAt: new Date("2026-01-05T23:33:45.084Z"),
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiSupplierDetailResponse](../../models/api-supplier-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |