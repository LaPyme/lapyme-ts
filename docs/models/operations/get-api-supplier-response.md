# GetApiSupplierResponse

## Example Usage

```typescript
import { GetApiSupplierResponse } from "lapyme/models/operations";

let value: GetApiSupplierResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
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
          id: "fd0e6eb6-e290-4396-ab35-a8ca83534491",
          scope: "customer",
          name: "<value>",
          slug: "<value>",
          color: "blue",
          description:
            "striking angrily oily brightly commandeer justly where unto",
          archivedAt: new Date("2024-07-02T07:10:54.132Z"),
          createdAt: new Date("2025-08-08T00:49:49.551Z"),
          updatedAt: new Date("2026-07-18T06:36:50.529Z"),
        },
      ],
      defaultAccountId: "442609d7-c5d6-4220-b1c1-fbd768a8fc67",
      country: "Sudan",
      provinceId: "<id>",
      city: "East Laurynville",
      address: "3982 Becker Flats",
      apartment: "<value>",
      postalCode: "37122",
      createdAt: new Date("2025-07-31T08:57:57.457Z"),
      updatedAt: new Date("2024-05-02T16:00:51.718Z"),
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiSupplierDetailResponse](../../models/api-supplier-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |