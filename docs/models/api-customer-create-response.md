# ApiCustomerCreateResponse

## Example Usage

```typescript
import { ApiCustomerCreateResponse } from "lapyme/models";

let value: ApiCustomerCreateResponse = {
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
      paymentTermDays: 362928,
      paymentTermLabel: "<value>",
      paymentTermInstallmentDays: [
        87122,
        967575,
        868626,
      ],
      provinceId: "<id>",
      isActive: false,
      createdAt: new Date("2025-05-03T01:54:27.337Z"),
      updatedAt: new Date("2026-06-18T19:37:30.442Z"),
      tags: [],
      defaultAccountId: "20878768-de14-4f02-8c89-83137b92c076",
      metafields: [],
      arcaDestinationCountry: 530615,
      foreignTaxId: "<id>",
      arcaCountryTaxId: "<id>",
      country: "French Guiana",
      postalCode: "71855-5406",
      assignedSalespersonId: "c3b90345-f3e8-4d5b-bea0-ebf7f5291157",
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
    idempotentReplay: false,
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiCustomerCreateResponseData](../models/api-customer-create-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `warnings`                                                                             | *any*[]                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |