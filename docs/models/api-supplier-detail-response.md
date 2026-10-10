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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjecte014df5c78](../models/api-shared-objecte014df5c78.md) | :heavy_check_mark:                                                           | N/A                                                                          |