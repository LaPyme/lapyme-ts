# CreateApiCustomerResponse

## Example Usage

```typescript
import { CreateApiCustomerResponse } from "lapyme/models/operations";

let value: CreateApiCustomerResponse = {
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
      customer: {
        object: "customer",
        id: "124021ad-e99e-4955-978d-e71868e4365e",
        name: "<value>",
        companyName: null,
        description: "whether bump rally imaginary",
        email: null,
        phone: "(266) 691-9840 x965",
        address: "26418 Stephania Crest",
        apartment: "<value>",
        city: null,
        deliveryCarrier: "<value>",
        deliveryAddress: "<value>",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        contactType: "<value>",
        defaultPriceListId: "f44204a2-a930-46df-aa2c-d2629d9cf9ec",
        paymentTermId: "<id>",
        paymentTermDays: null,
        provinceId: "<id>",
        isActive: true,
        createdAt: new Date("2026-06-05T18:23:40.404Z"),
        updatedAt: new Date("2026-01-21T09:33:02.217Z"),
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
        country: "Iraq",
        postalCode: "20442-2391",
        assignedSalespersonId: "5f7e813a-2a45-470a-9cba-d72b0137ccfb",
        defaultGananciasRegimen: "<value>",
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
      idempotentReplay: true,
    },
    warnings: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiCustomerCreateResponse](../../models/api-customer-create-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |