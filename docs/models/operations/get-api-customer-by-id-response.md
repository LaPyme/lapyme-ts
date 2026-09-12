# GetApiCustomerByIdResponse

## Example Usage

```typescript
import { GetApiCustomerByIdResponse } from "lapyme/models/operations";

let value: GetApiCustomerByIdResponse = {
  headers: {
    "key": [],
  },
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
      deliveryCarrier: "<value>",
      deliveryAddress: "<value>",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      contactType: "<value>",
      defaultPriceListId: "5d8f5f99-75f9-4d4b-b559-f89bf3a605d8",
      paymentTermId: "<id>",
      paymentTermDays: 726581,
      provinceId: null,
      isActive: true,
      createdAt: new Date("2025-03-07T18:25:52.356Z"),
      updatedAt: new Date("2024-02-02T15:39:44.731Z"),
      tags: [],
      country: "Indonesia",
      postalCode: "42521",
      assignedSalespersonId: "0bc711a3-0193-4ccf-806d-da228184fcd2",
      defaultGananciasRegimen: null,
      assignedSalesperson: {
        id: "5c1fd498-7d78-4208-a787-68de14f02c89",
        fullName: "Tiffany Predovic",
      },
      defaultPriceList: {
        id: "c07615c8-62c4-45dc-91c8-8870aac3b903",
        name: "<value>",
      },
      salesOverview: {
        pendingBalance: 3585.05,
        salesCount: 980945,
        totalSales: 2449.98,
        recentSales: [
          {
            id: "8d5bea0e-bf7f-4529-a115-7d696c0662b7",
            voucherType: "<value>",
            invoiceStatus: "<value>",
            invoiceDate: "<value>",
            currency: "Swiss Franc",
            total: 6467.05,
            formattedInvoiceNumber: "<value>",
            originalSaleId: "<id>",
            createdAt: new Date("2024-09-07T07:40:56.051Z"),
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