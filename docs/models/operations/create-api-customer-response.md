# CreateApiCustomerResponse

## Example Usage

```typescript
import { CreateApiCustomerResponse } from "lapyme/models/operations";

let value: CreateApiCustomerResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    data: {
      customer: {
        object: "customer",
        id: "124021ad-e99e-4955-978d-e71868e4365e",
        code: null,
        name: "<value>",
        companyName: "Konopelski - Gulgowski",
        description:
          "ah eggplant noteworthy abaft sun boo usually utilization an design",
        email: null,
        phone: "(961) 881-4158 x67959",
        address: "809 Gleason Spur",
        apartment: "<value>",
        city: "South Theo",
        deliveryCarrier: "<value>",
        deliveryAddress: "<value>",
        taxId: null,
        taxIdType: "<value>",
        taxCategory: "<value>",
        contactType: "<value>",
        defaultPriceListId: "4f2f5f7e-813a-42a4-b570-acbad72b0137",
        paymentTermId: "<id>",
        paymentTermDays: 699233,
        provinceId: "<id>",
        isActive: true,
        createdAt: new Date("2025-01-04T03:39:11.282Z"),
        updatedAt: new Date("2026-04-24T04:15:21.859Z"),
        tags: [],
        defaultAccountId: "d4987d78-2087-4876-98de-14f02c898313",
        metafields: [
          {
            definitionId: "92c07615-c862-4c45-8dc1-c88870aac3b9",
            value: "<value>",
          },
        ],
        arcaDestinationCountry: 251131,
        foreignTaxId: "<id>",
        arcaCountryTaxId: "<id>",
        country: "Tunisia",
        postalCode: "37960-8794",
        assignedSalespersonId: "5291157d-696c-4066-a2b7-bd2a9332fca9",
        defaultGananciasRegimen: null,
        assignedSalesperson: {
          id: "76e0599b-9d89-4d29-8f93-7b32dfb87783",
          fullName: "Bridget VonRueden",
        },
        defaultPriceList: {
          id: "f4aab940-a56d-4994-8de4-b02c42b3df9b",
          name: "<value>",
        },
        salesOverview: {
          pendingBalance: 6295.24,
          salesCount: 660594,
          totalSales: 9966.33,
          recentSales: [],
        },
      },
      idempotentReplay: false,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiCustomerCreateResponse](../../models/api-customer-create-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |