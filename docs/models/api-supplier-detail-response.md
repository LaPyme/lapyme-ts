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
        id: "b4c64393-84ca-458c-8f3b-39718b070484",
        scope: "transfer",
        name: "<value>",
        slug: "<value>",
        color: "pink",
        description: "delectable astride downright",
        archivedAt: new Date("2024-08-12T06:34:32.349Z"),
        createdAt: new Date("2024-10-25T15:17:34.484Z"),
        updatedAt: new Date("2024-11-10T16:15:42.311Z"),
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
| `data`                                                                       | [models.ApiSharedObjecta895abd5ec](../models/api-shared-objecta895abd5ec.md) | :heavy_check_mark:                                                           | N/A                                                                          |