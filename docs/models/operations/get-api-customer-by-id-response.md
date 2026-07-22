# GetApiCustomerByIdResponse

## Example Usage

```typescript
import { GetApiCustomerByIdResponse } from "lapyme/models/operations";

let value: GetApiCustomerByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
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
      deliveryCarrier: "<value>",
      deliveryAddress: "<value>",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      contactType: "<value>",
      defaultPriceListId: "5d8f5f99-75f9-4d4b-b559-f89bf3a605d8",
      paymentTermId: "<id>",
      paymentTermDays: 726581,
      provinceId: null,
      isActive: true,
      createdAt: new Date("2025-03-07T18:25:52.356Z"),
      updatedAt: new Date("2024-02-02T15:39:44.731Z"),
      country: "Ireland",
      postalCode: "34252-1207",
      assignedSalespersonId: "711a3019-3ccf-406d-bda2-28184fcd2007",
      defaultGananciasRegimen: "<value>",
      assignedSalesperson: null,
      defaultPriceList: {
        id: "2c07615c-862c-445d-8c1c-88870aac3b90",
        name: "<value>",
      },
      salesOverview: {
        pendingBalance: 2511.31,
        salesCount: 358505,
        totalSales: 9809.45,
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