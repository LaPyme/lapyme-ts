# ApiSupplierUpdateResponseData

## Example Usage

```typescript
import { ApiSupplierUpdateResponseData } from "lapyme/models";

let value: ApiSupplierUpdateResponseData = {
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
    defaultAccountId: "2f11213e-900d-43a9-8d96-658124d9faf1",
    country: null,
    provinceId: "<id>",
    city: "Melanyborough",
    address: null,
    apartment: "<value>",
    postalCode: "98472",
    createdAt: new Date("2025-06-22T07:25:06.612Z"),
    updatedAt: new Date("2026-07-16T14:09:23.826Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `supplier`                                                                   | [models.ApiSharedObjecte014df5c78](../models/api-shared-objecte014df5c78.md) | :heavy_check_mark:                                                           | N/A                                                                          |