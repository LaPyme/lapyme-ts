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
    country: null,
    postalCode: null,
    assignedSalespersonId: "3ccf06dd-a228-4184-afcd-2007c517ea83",
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject0422ec7dd0](../models/api-shared-object0422ec7dd0.md) | :heavy_check_mark:                                                           | N/A                                                                          |