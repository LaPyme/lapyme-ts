# ApiCustomerDetailResponse

## Example Usage

```typescript
import { ApiCustomerDetailResponse } from "lapyme/models";

let value: ApiCustomerDetailResponse = {
  requestId: "<id>",
  data: {
    object: "customer",
    id: "85a88c06-fbe6-4640-9ea2-feabe949abcd",
    code: null,
    name: "<value>",
    companyName: null,
    description: "retract sans emboss",
    email: null,
    phone: "677.431.7429",
    address: "593 Park Place",
    apartment: "<value>",
    city: "Fort Liana",
    deliveryCarrier: "<value>",
    deliveryAddress: "<value>",
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: "<value>",
    contactType: "<value>",
    defaultPriceListId: "89bf3a60-5d8c-429b-80d5-606668574941",
    paymentTermId: null,
    paymentTermDays: 779659,
    provinceId: "<id>",
    isActive: null,
    createdAt: new Date("2024-03-25T13:58:39.002Z"),
    updatedAt: new Date("2026-01-09T22:51:42.265Z"),
    tags: [],
    defaultAccountId: null,
    metafields: [],
    arcaDestinationCountry: 207080,
    foreignTaxId: "<id>",
    arcaCountryTaxId: "<id>",
    country: "Armenia",
    postalCode: "86115-0529",
    assignedSalespersonId: "d2007c51-7ea8-4384-9e36-7cf524bda882",
    defaultGananciasRegimen: "<value>",
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectd4462f23a0](../models/api-shared-objectd4462f23a0.md) | :heavy_check_mark:                                                           | N/A                                                                          |