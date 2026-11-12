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
    defaultDiscountPercentage: null,
    defaultPriceListIsBase: false,
    paymentTermId: "<id>",
    paymentTermDays: 85215,
    provinceId: null,
    isActive: true,
    createdAt: new Date("2024-01-22T20:30:46.433Z"),
    updatedAt: new Date("2024-04-07T08:31:58.940Z"),
    tags: [
      {
        object: "tag",
        id: "d17aba97-5a39-49b6-b021-2a82b75ca998",
        scope: "purchase_order",
        name: "<value>",
        slug: "<value>",
        color: "yellow",
        description: "natural huzzah heavenly",
        archivedAt: new Date("2024-12-06T02:21:59.305Z"),
        createdAt: new Date("2024-02-28T10:14:14.640Z"),
        updatedAt: new Date("2025-08-18T02:43:21.277Z"),
      },
    ],
    defaultAccountId: "ccf06dda-2281-484f-9cd2-007c517ea838",
    metafields: [
      {
        definitionId: "07615c86-2c45-4dc1-9c88-870aac3b9034",
        value: "<value>",
      },
    ],
    arcaDestinationCountry: 406144,
    foreignTaxId: "<id>",
    arcaCountryTaxId: "<id>",
    country: "Germany",
    postalCode: "78655",
    assignedSalespersonId: "6facfe27-e9b3-4f47-99e5-34826ccb2a8d",
    defaultGananciasRegimen: "<value>",
    assignedSalesperson: {
      id: "0599b9d8-9d29-4f93-a7b3-2dfb87783371",
      fullName: "Chad Witting",
    },
    defaultPriceList: null,
    salesOverview: {
      pendingBalance: 1365.89,
      salesCount: 536697,
      totalSales: 1550.28,
      recentSales: [
        {
          id: "01efec15-a4bb-4938-a67c-cab0c76e2c04",
          voucherType: "<value>",
          invoiceStatus: "<value>",
          invoiceDate: "<value>",
          currency: "Rupiah",
          total: 5004.72,
          formattedInvoiceNumber: "<value>",
          originalSaleId: "<id>",
          createdAt: new Date("2024-06-21T23:52:04.412Z"),
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
| `data`                                                                       | [models.ApiSharedObjecta6ed1b9437](../models/api-shared-objecta6ed1b9437.md) | :heavy_check_mark:                                                           | N/A                                                                          |