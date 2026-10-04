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
      paymentTermId: "<id>",
      paymentTermDays: 699233,
      provinceId: "<id>",
      isActive: true,
      createdAt: new Date("2025-01-04T03:39:11.282Z"),
      updatedAt: new Date("2026-04-24T04:15:21.859Z"),
      tags: [],
      country: "Syrian Arab Republic",
      postalCode: "54845-1054",
      assignedSalespersonId: "768de14f-02c8-4983-8137-b92c07615c86",
      defaultGananciasRegimen: "<value>",
      assignedSalesperson: {
        id: "5dc1c888-70aa-4c3b-b903-45f3e8d5bea0",
        fullName: "Neil Hickle-Crist",
      },
      defaultPriceList: {
        id: "157d696c-0662-4b7b-9d2a-9332fca9a037",
        name: "<value>",
      },
      salesOverview: {
        pendingBalance: 9284.39,
        salesCount: 24825,
        totalSales: 3481.61,
        recentSales: [
          {
            id: "9b9d89d2-9f93-47b3-82df-b87783371bee",
            voucherType: "<value>",
            invoiceStatus: "<value>",
            invoiceDate: "<value>",
            currency: "Rand",
            total: 3066.92,
            formattedInvoiceNumber: "<value>",
            originalSaleId: "<id>",
            createdAt: new Date("2026-02-12T19:25:34.811Z"),
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