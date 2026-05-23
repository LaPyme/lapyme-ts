# ApiCustomerCreateResponseCustomer

## Example Usage

```typescript
import { ApiCustomerCreateResponseCustomer } from "lapyme/models";

let value: ApiCustomerCreateResponseCustomer = {
  object: "customer",
  id: "8cd00503-ac12-473e-8be5-66a35c57c71c",
  name: "<value>",
  companyName: "Emmerich - Wolf",
  description: null,
  email: "Aniyah62@yahoo.com",
  phone: "212.251.6776",
  address: "658 Spring Gardens",
  apartment: null,
  city: null,
  taxId: "<id>",
  taxIdType: "<value>",
  taxCategory: "<value>",
  contactType: "<value>",
  defaultPriceListId: "6f978163-943c-44fa-b0ed-3e5322573399",
  paymentTermId: "<id>",
  provinceId: "<id>",
  isActive: null,
  createdAt: new Date("2024-11-05T16:21:27.275Z"),
  updatedAt: new Date("2025-03-27T23:47:17.268Z"),
  country: "Chad",
  postalCode: "00439",
  assignedSalespersonId: "34eee630-930d-4ee0-b139-505977a10403",
  defaultGananciasRegimen: null,
  assignedSalesperson: {
    id: "b6535c1f-d498-47d7-8820-878768de14f0",
    fullName: "Austin Ernser",
  },
  defaultPriceList: {
    id: "7b92c076-15c8-462c-a45d-c1c88870aac3",
    name: "<value>",
  },
  salesOverview: {
    pendingBalance: 6093.53,
    salesCount: 16507,
    totalSales: 1995.84,
    recentSales: [],
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
| `assignedSalesperson`                                                                                                 | [models.ApiCustomerCreateResponseAssignedSalesperson](../models/api-customer-create-response-assigned-salesperson.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `defaultPriceList`                                                                                                    | [models.ApiCustomerCreateResponseDefaultPriceList](../models/api-customer-create-response-default-price-list.md)      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `salesOverview`                                                                                                       | [models.ApiCustomerCreateResponseSalesOverview](../models/api-customer-create-response-sales-overview.md)             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |