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
      paymentTermDays: 138029,
      paymentTermLabel: "<value>",
      paymentTermInstallmentDays: [
        767496,
      ],
      isActive: true,
      tags: [
        {
          object: "tag",
          id: "75a399b6-0212-4a82-9b75-ca998fb65f13",
          scope: "purchase_order",
          name: "<value>",
          slug: "<value>",
          color: "teal",
          description: "huzzah heavenly until by t-shirt geez however",
          archivedAt: new Date("2026-12-06T07:31:36.084Z"),
          createdAt: new Date("2026-08-04T02:33:18.776Z"),
          updatedAt: new Date("2026-03-09T19:55:25.442Z"),
        },
      ],
      defaultAccountId: "1213e900-d3a9-4d96-b658-124d9faf1119",
      country: "Pitcairn Islands",
      provinceId: "<id>",
      city: null,
      address: "498 Prohaska Fork",
      apartment: "<value>",
      postalCode: "64125-5140",
      createdAt: new Date("2024-04-03T17:39:42.222Z"),
      updatedAt: new Date("2026-10-15T05:43:47.991Z"),
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