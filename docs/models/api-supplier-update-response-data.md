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
    country: "Chile",
    provinceId: "<id>",
    city: "East Audreanneburgh",
    address: "1082 Pine Street",
    apartment: "<value>",
    postalCode: "43511",
    createdAt: new Date("2024-10-17T09:21:26.745Z"),
    updatedAt: new Date("2026-07-25T08:45:32.215Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `supplier`                                                                   | [models.ApiSharedObjecta895abd5ec](../models/api-shared-objecta895abd5ec.md) | :heavy_check_mark:                                                           | N/A                                                                          |