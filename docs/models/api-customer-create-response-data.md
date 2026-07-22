# ApiCustomerCreateResponseData

## Example Usage

```typescript
import { ApiCustomerCreateResponseData } from "lapyme/models";

let value: ApiCustomerCreateResponseData = {
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
    deliveryCarrier: "<value>",
    deliveryAddress: "<value>",
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: "<value>",
    contactType: "<value>",
    defaultPriceListId: "f44204a2-a930-46df-aa2c-d2629d9cf9ec",
    paymentTermId: "<id>",
    paymentTermDays: null,
    provinceId: "<id>",
    isActive: true,
    createdAt: new Date("2026-06-05T18:23:40.404Z"),
    updatedAt: new Date("2026-01-21T09:33:02.217Z"),
    country: "Gabon",
    postalCode: "52044-2239",
    assignedSalespersonId: "f5f7e813-a2a4-4570-aacb-ad72b0137ccf",
    defaultGananciasRegimen: "<value>",
    assignedSalesperson: {
      id: "35c1fd49-87d7-4820-a878-768de14f02c8",
      fullName: "Anna Koss",
    },
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
  idempotentReplay: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `customer`                                                                   | [models.ApiSharedObjectc446846cea](../models/api-shared-objectc446846cea.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |