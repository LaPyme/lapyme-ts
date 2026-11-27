# GetApiCustomerByIdResponse

## Example Usage

```typescript
import { GetApiCustomerByIdResponse } from "lapyme/models/operations";

let value: GetApiCustomerByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
      paymentTermDays: 498819,
      paymentTermLabel: null,
      paymentTermInstallmentDays: null,
      provinceId: "<id>",
      isActive: true,
      createdAt: new Date("2024-04-07T08:31:58.940Z"),
      updatedAt: new Date("2025-10-28T17:28:24.037Z"),
      tags: [],
      defaultAccountId: "cf06dda2-2818-44fc-bd20-07c517ea8384",
      metafields: [],
      arcaDestinationCountry: 484666,
      foreignTaxId: "<id>",
      arcaCountryTaxId: "<id>",
      country: "Cape Verde",
      postalCode: "86551-3967",
      assignedSalespersonId: "e27e9b3f-479e-4534-9826-ccb2a8d5b301",
      defaultGananciasRegimen: "<value>",
      assignedSalesperson: {
        id: "6c0662b7-bd2a-4933-a2fc-a9a0376e0599",
        fullName: "Casey Steuber",
      },
      defaultPriceList: {
        id: "f937b32d-fb87-4783-8371-bee3ef4aab94",
        name: "<value>",
      },
      salesOverview: {
        pendingBalance: 6544.5,
        salesCount: 361363,
        totalSales: 4059.55,
        recentSales: [
          {
            id: "994de4b0-2c42-4b3d-bf9b-1aaf282b01ef",
            voucherType: "<value>",
            invoiceStatus: "<value>",
            invoiceDate: "<value>",
            currency: "Taka",
            total: 3300.5,
            formattedInvoiceNumber: "<value>",
            originalSaleId: "<id>",
            createdAt: new Date("2026-03-06T09:59:12.277Z"),
          },
        ],
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