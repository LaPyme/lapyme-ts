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
    defaultPriceListIsBase: true,
    paymentTermId: "<id>",
    paymentTermDays: 498819,
    provinceId: null,
    isActive: null,
    createdAt: new Date("2026-01-09T22:51:42.265Z"),
    updatedAt: new Date("2024-08-28T18:06:02.753Z"),
    tags: [],
    defaultAccountId: null,
    metafields: [
      {
        definitionId: "2c07615c-862c-445d-8c1c-88870aac3b90",
        value: "<value>",
      },
    ],
    arcaDestinationCountry: 758289,
    foreignTaxId: "<id>",
    arcaCountryTaxId: "<id>",
    country: null,
    postalCode: "86115-0529",
    assignedSalespersonId: "d2007c51-7ea8-4384-9e36-7cf524bda882",
    defaultGananciasRegimen: "<value>",
    assignedSalesperson: {
      id: "a0376e05-99b9-4d89-9d29-f937b32dfb87",
      fullName: "Josephine Botsford",
    },
    defaultPriceList: {
      id: "e3ef4aab-940a-456d-b994-de4b02c42b3d",
      name: "<value>",
    },
    salesOverview: {
      pendingBalance: 5696.46,
      salesCount: 719734,
      totalSales: 907.41,
      recentSales: [
        {
          id: "af282b01-efec-415a-94bb-93867ccab0c7",
          voucherType: "<value>",
          invoiceStatus: "<value>",
          invoiceDate: "<value>",
          currency: "Pula",
          total: 7997.14,
          formattedInvoiceNumber: null,
          originalSaleId: "<id>",
          createdAt: new Date("2026-03-14T02:12:52.796Z"),
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject49cd7e6dc7](../models/api-shared-object49cd7e6dc7.md) | :heavy_check_mark:                                                           | N/A                                                                          |