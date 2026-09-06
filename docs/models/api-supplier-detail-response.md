# ApiSupplierDetailResponse

## Example Usage

```typescript
import { ApiSupplierDetailResponse } from "lapyme/models";

let value: ApiSupplierDetailResponse = {
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
        id: "9b4c6439-384c-4a58-9cf3-b39718b07048",
        scope: "customer",
        name: "<value>",
        slug: "<value>",
        color: "indigo",
        description:
          "vacantly unless nautical alongside around optimistic for lasting sometimes",
        archivedAt: new Date("2024-05-13T14:06:09.243Z"),
        createdAt: new Date("2026-03-04T18:15:09.469Z"),
        updatedAt: new Date("2026-05-06T00:20:31.712Z"),
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject3028e7f4b3](../models/api-shared-object3028e7f4b3.md) | :heavy_check_mark:                                                           | N/A                                                                          |