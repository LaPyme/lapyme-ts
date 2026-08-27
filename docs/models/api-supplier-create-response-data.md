# ApiSupplierCreateResponseData

## Example Usage

```typescript
import { ApiSupplierCreateResponseData } from "lapyme/models";

let value: ApiSupplierCreateResponseData = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `supplier`                                                                   | [models.ApiSharedObject3028e7f4b3](../models/api-shared-object3028e7f4b3.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |