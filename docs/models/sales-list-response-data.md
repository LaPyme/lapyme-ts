# SalesListResponseData

## Example Usage

```typescript
import { SalesListResponseData } from "lapyme/models";

let value: SalesListResponseData = {
  id: "43a42cce-155b-49bb-9a8f-bb6012c84caa",
  invoiceNumber: 3232.38,
  formattedInvoiceNumber: "<value>",
  invoiceDate: new Date("2025-08-10"),
  dueDate: new Date("2025-06-04"),
  serviceFrom: new Date("2026-11-17"),
  serviceTo: new Date("2024-06-13"),
  currency: "Guyana Dollar",
  subtotal: 4333.25,
  taxAmount: 6597.74,
  total: 291.19,
  balance: 7876.37,
  concept: 2307.11,
  notes: "<value>",
  fiscalNotes: "<value>",
  integrationSource: "<value>",
  integrationId: "<id>",
  customer: {
    id: "bf9a8a67-8c23-47ae-bb58-1edf2e184538",
    name: "<value>",
    email: "Matteo_Lueilwitz98@hotmail.com",
    phone: "1-810-678-3125 x10437",
    taxId: "<id>",
    address: "202 Beier Circles",
    apartment: null,
    city: "Fritschtown",
    province: "<value>",
  },
  items: [],
  createdAt: new Date("2025-11-03T12:02:51.087Z"),
  updatedAt: new Date("2026-08-10T10:23:28.805Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoiceNumber`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `formattedInvoiceNumber`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoiceDate`                                                                                 | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dueDate`                                                                                     | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `serviceFrom`                                                                                 | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `serviceTo`                                                                                   | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subtotal`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `concept`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fiscalNotes`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `integrationSource`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `integrationId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [models.SalesListResponseCustomer](../models/sales-list-response-customer.md)                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.SalesListResponseItem](../models/sales-list-response-item.md)[]                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |