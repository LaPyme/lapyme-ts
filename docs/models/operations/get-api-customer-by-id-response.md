# GetApiCustomerByIdResponse

## Example Usage

```typescript
import { GetApiCustomerByIdResponse } from "lapyme/models/operations";

let value: GetApiCustomerByIdResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "customer",
      id: "85a88c06-fbe6-4640-9ea2-feabe949abcd",
      name: "<value>",
      companyName: null,
      description: null,
      email: "Holly.Jast@gmail.com",
      phone: "722.317.2868 x702",
      address: null,
      apartment: "<value>",
      city: "Russelfort",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      contactType: "<value>",
      defaultPriceListId: "4e5d8f5f-9975-4f9d-b4b5-59f89bf3a605",
      paymentTermId: "<id>",
      provinceId: "<id>",
      isActive: false,
      createdAt: new Date("2026-03-07T07:59:34.891Z"),
      updatedAt: new Date("2024-03-07T14:57:22.321Z"),
      country: "Gabon",
      postalCode: "44453",
      assignedSalespersonId: "494130bc-711a-4301-993c-cf06dda22818",
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiCustomerDetailResponse](../../models/api-customer-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |