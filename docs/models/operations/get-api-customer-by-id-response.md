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
    "key2": [
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
      paymentTermId: "<id>",
      paymentTermDays: 85215,
      paymentTermLabel: null,
      paymentTermInstallmentDays: [],
      provinceId: null,
      isActive: null,
      createdAt: new Date("2025-10-28T17:28:24.037Z"),
      updatedAt: new Date("2024-08-14T23:01:51.072Z"),
      tags: [
        {
          object: "tag",
          id: "fd0e6eb6-e290-4396-ab35-a8ca83534491",
          scope: "customer",
          name: "<value>",
          slug: "<value>",
          color: "blue",
          description:
            "striking angrily oily brightly commandeer justly where unto",
          archivedAt: new Date("2024-07-02T07:10:54.132Z"),
          createdAt: new Date("2025-08-08T00:49:49.551Z"),
          updatedAt: new Date("2026-07-18T06:36:50.529Z"),
        },
      ],
      defaultAccountId: "f06dda22-8184-4fcd-8200-7c517ea8384e",
      metafields: [],
      arcaDestinationCountry: 811092,
      foreignTaxId: "<id>",
      arcaCountryTaxId: "<id>",
      country: "Eritrea",
      postalCode: "65513-9679",
      assignedSalespersonId: "27e9b3f4-79e5-4348-926c-cb2a8d5b3015",
      defaultGananciasRegimen: "<value>",
      assignedSalesperson: {
        id: "157d696c-0662-4b7b-9d2a-9332fca9a037",
        fullName: "Annette Mayer",
      },
      defaultPriceList: {
        id: "d89d29f9-37b3-42df-9b87-783371bee3ef",
        name: "<value>",
      },
      salesOverview: {
        pendingBalance: 6341.09,
        salesCount: 656559,
        totalSales: 7060.31,
        recentSales: [
          {
            id: "40a56d99-4de4-4b02-8c42-b3df9b1aaf28",
            voucherType: "<value>",
            invoiceStatus: "<value>",
            invoiceDate: "<value>",
            currency: "Netherlands Antillian Guilder",
            total: 1078.35,
            formattedInvoiceNumber: "<value>",
            originalSaleId: "<id>",
            createdAt: new Date("2026-08-23T23:41:43.233Z"),
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