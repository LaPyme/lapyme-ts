# UpdateApiCustomerResponse

## Example Usage

```typescript
import { UpdateApiCustomerResponse } from "lapyme/models/operations";

let value: UpdateApiCustomerResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: {
      customer: {
        object: "customer",
        id: "627f8762-28e3-42d3-a7cd-648f9f1a8329",
        name: "<value>",
        companyName: "Crona and Sons",
        description:
          "drat secularize zany pacemaker after steep spectate toward",
        email: "Kasey_Mraz@gmail.com",
        phone: "1-359-635-9669 x88456",
        address: null,
        apartment: "<value>",
        city: "East Arely",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        contactType: "<value>",
        defaultPriceListId: null,
        paymentTermId: "<id>",
        provinceId: "<id>",
        isActive: false,
        createdAt: new Date("2025-04-30T01:29:57.188Z"),
        updatedAt: new Date("2025-09-01T08:46:32.098Z"),
        country: "Peru",
        postalCode: "61986-7893",
        assignedSalespersonId: "a8a0458c-015a-4a73-8323-0946ac3568ed",
        defaultGananciasRegimen: "<value>",
        assignedSalesperson: {
          id: "d5bb9b42-c89d-4e97-9fd8-fc76dfaf582b",
          fullName: "Lyle Ortiz",
        },
        defaultPriceList: {
          id: "1e4e8b00-2983-47b8-b952-be5b6e576a09",
          name: "<value>",
        },
        salesOverview: {
          pendingBalance: 903.37,
          salesCount: 270181,
          totalSales: 2297.2,
          recentSales: [
            {
              id: "600e5850-829d-45b6-8c4a-0aabb6882951",
              voucherType: "<value>",
              invoiceStatus: "<value>",
              invoiceDate: "<value>",
              currency: "CFA Franc BCEAO",
              total: 3921.45,
              formattedInvoiceNumber: "<value>",
              originalSaleId: "<id>",
              createdAt: new Date("2026-10-12T06:29:33.672Z"),
            },
          ],
        },
      },
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiCustomerUpdateResponse](../../models/api-customer-update-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |