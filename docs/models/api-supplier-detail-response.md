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
    isActive: false,
    country: "Greece",
    provinceId: "<id>",
    city: "West Caterina",
    address: "68473 Lake Drive",
    apartment: "<value>",
    postalCode: "08096",
    createdAt: new Date("2026-06-17T11:47:26.140Z"),
    updatedAt: new Date("2025-06-06T17:36:15.305Z"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiSupplierDetailResponseData](../models/api-supplier-detail-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |