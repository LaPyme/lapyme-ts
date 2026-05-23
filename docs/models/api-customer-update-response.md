# ApiCustomerUpdateResponse

## Example Usage

```typescript
import { ApiCustomerUpdateResponse } from "lapyme/models";

let value: ApiCustomerUpdateResponse = {
  requestId: "<id>",
  data: {
    customer: {
      object: "customer",
      id: "124021ad-e99e-4955-978d-e71868e4365e",
      name: "<value>",
      companyName: null,
      description: "whether bump rally imaginary",
      email: null,
      phone: "(266) 691-9840 x965",
      address: "26418 Stephania Crest",
      apartment: "<value>",
      city: null,
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      contactType: "<value>",
      defaultPriceListId: "3ef44204-a2a9-4306-bdfa-2cd2629d9cf9",
      paymentTermId: "<id>",
      provinceId: "<id>",
      isActive: true,
      createdAt: new Date("2026-12-06T15:52:02.232Z"),
      updatedAt: new Date("2025-03-06T21:49:30.709Z"),
      country: "Sint Maarten",
      postalCode: "34952-0442",
      assignedSalespersonId: "4f2f5f7e-813a-42a4-b570-acbad72b0137",
      defaultGananciasRegimen: "<value>",
      assignedSalesperson: {
        id: "b6535c1f-d498-47d7-8820-878768de14f0",
        fullName: "Austin Ernser",
      },
      defaultPriceList: {
        id: "7b92c076-15c8-462c-a45d-c1c88870aac3",
        name: "<value>",
      },
      salesOverview: {
        pendingBalance: 6093.53,
        salesCount: 16507,
        totalSales: 1995.84,
        recentSales: [],
      },
    },
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiCustomerUpdateResponseData](../models/api-customer-update-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `warnings`                                                                             | *any*[]                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |