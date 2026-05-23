# GetApiCustomerByIdResponse

## Example Usage

```typescript
import { GetApiCustomerByIdResponse } from "lapyme/models/operations";

let value: GetApiCustomerByIdResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "customer",
      id: "85a88c06-fbe6-4640-9ea2-feabe949abcd",
      name: "<value>",
      companyName: null,
      description: null,
      email: "Holly.Jast@gmail.com",
      phone: "722.317.2868 x702",
      address: null,
      apartment: "<value>",
      city: "Russelfort",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      contactType: "<value>",
      defaultPriceListId: "4e5d8f5f-9975-4f9d-b4b5-59f89bf3a605",
      paymentTermId: "<id>",
      provinceId: "<id>",
      isActive: false,
      createdAt: new Date("2026-03-07T07:59:34.891Z"),
      updatedAt: new Date("2024-03-07T14:57:22.321Z"),
      country: "Gabon",
      postalCode: "44453",
      assignedSalespersonId: "494130bc-711a-4301-993c-cf06dda22818",
      defaultGananciasRegimen: "<value>",
      assignedSalesperson: {
        id: "d2007c51-7ea8-4384-9e36-7cf524bda882",
        fullName: "Edmund Towne",
      },
      defaultPriceList: {
        id: "e9b3f479-e534-4826-8ccb-2a8d5b30157d",
        name: "<value>",
      },
      salesOverview: {
        pendingBalance: 5498.06,
        salesCount: 841118,
        totalSales: 5356.42,
        recentSales: [
          {
            id: "941b99e5-80a4-43f2-9fda-c8e182b5e37d",
            voucherType: "<value>",
            invoiceStatus: "<value>",
            invoiceDate: "<value>",
            currency: "South Sudanese pound",
            total: 1271.6,
            formattedInvoiceNumber: "<value>",
            originalSaleId: "<id>",
            createdAt: new Date("2025-06-17T18:06:40.591Z"),
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