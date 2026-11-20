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
      defaultDiscountPercentage: 9624.95,
      defaultPriceListIsBase: false,
      paymentTermId: "<id>",
      paymentTermDays: 206639,
      paymentTermLabel: "<value>",
      paymentTermInstallmentDays: [],
      provinceId: "<id>",
      isActive: true,
      createdAt: new Date("2025-09-16T19:40:45.719Z"),
      updatedAt: new Date("2025-07-15T18:46:11.040Z"),
      tags: [],
      defaultAccountId: "78208787-68de-414f-902c-8983137b92c0",
      metafields: [],
      arcaDestinationCountry: 324425,
      foreignTaxId: "<id>",
      arcaCountryTaxId: "<id>",
      country: "Brunei Darussalam",
      postalCode: "38718",
      assignedSalespersonId: "8870aac3-b903-445f-83e8-d5bea0ebf7f5",
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