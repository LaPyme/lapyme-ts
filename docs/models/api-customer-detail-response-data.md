# ApiCustomerDetailResponseData

## Example Usage

```typescript
import { ApiCustomerDetailResponseData } from "lapyme/models";

let value: ApiCustomerDetailResponseData = {
  object: "customer",
  id: "6b188b22-a9d0-4aa1-90da-d3e5281eb10c",
  name: "<value>",
  companyName: "Fisher - Larson",
  description: "prime including variable",
  email: "Alayna13@hotmail.com",
  phone: "(296) 840-5439",
  address: "290 Barrett Green",
  apartment: "<value>",
  city: "Dooleyfield",
  taxId: null,
  taxIdType: "<value>",
  taxCategory: "<value>",
  contactType: "<value>",
  defaultPriceListId: "359626eb-689a-4d00-8699-d991556be9be",
  paymentTermId: "<id>",
  provinceId: "<id>",
  isActive: false,
  createdAt: new Date("2025-03-17T09:58:37.458Z"),
  updatedAt: new Date("2025-07-09T08:08:40.769Z"),
  country: "Bonaire, Sint Eustatius and Saba",
  postalCode: "22043",
  assignedSalespersonId: "7239fd81-3e08-40da-9a11-6ec40b040360",
  defaultGananciasRegimen: "<value>",
  assignedSalesperson: null,
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
| `assignedSalesperson`                                                                                                 | [models.ApiCustomerDetailResponseAssignedSalesperson](../models/api-customer-detail-response-assigned-salesperson.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `defaultPriceList`                                                                                                    | [models.ApiCustomerDetailResponseDefaultPriceList](../models/api-customer-detail-response-default-price-list.md)      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `salesOverview`                                                                                                       | [models.ApiCustomerDetailResponseSalesOverview](../models/api-customer-detail-response-sales-overview.md)             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |