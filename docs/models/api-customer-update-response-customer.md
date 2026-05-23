# ApiCustomerUpdateResponseCustomer

## Example Usage

```typescript
import { ApiCustomerUpdateResponseCustomer } from "lapyme/models";

let value: ApiCustomerUpdateResponseCustomer = {
  object: "customer",
  id: "1121c0da-0b6d-4875-a7e2-deadd4dfa493",
  name: "<value>",
  companyName: "Connelly, Jaskolski and Streich",
  description: "kookily legal whoever",
  email: "Leatha_Hodkiewicz10@yahoo.com",
  phone: "548-283-5769 x4349",
  address: "6835 Wuckert Avenue",
  apartment: "<value>",
  city: "Dillonland",
  taxId: "<id>",
  taxIdType: "<value>",
  taxCategory: "<value>",
  contactType: "<value>",
  defaultPriceListId: "1f003e23-49eb-4ef7-bf27-ba443d6a4f12",
  paymentTermId: "<id>",
  provinceId: "<id>",
  isActive: false,
  createdAt: new Date("2024-02-20T21:53:16.707Z"),
  updatedAt: new Date("2024-05-16T02:01:39.092Z"),
  country: "Lesotho",
  postalCode: null,
  assignedSalespersonId: "362391a2-6ac6-4bb7-aae0-ea0c750bf99c",
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
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                              | *"customer"*                                                                                                          | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `name`                                                                                                                | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `companyName`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `description`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `email`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `phone`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `address`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `apartment`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `city`                                                                                                                | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `taxId`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `taxIdType`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `taxCategory`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `contactType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `defaultPriceListId`                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `paymentTermId`                                                                                                       | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `provinceId`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `isActive`                                                                                                            | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `createdAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `updatedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `country`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `postalCode`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `assignedSalespersonId`                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `defaultGananciasRegimen`                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `assignedSalesperson`                                                                                                 | [models.ApiCustomerUpdateResponseAssignedSalesperson](../models/api-customer-update-response-assigned-salesperson.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `defaultPriceList`                                                                                                    | [models.ApiCustomerUpdateResponseDefaultPriceList](../models/api-customer-update-response-default-price-list.md)      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `salesOverview`                                                                                                       | [models.ApiCustomerUpdateResponseSalesOverview](../models/api-customer-update-response-sales-overview.md)             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |