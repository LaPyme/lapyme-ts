# CreateSaleResponseData

## Example Usage

```typescript
import { CreateSaleResponseData } from "lapyme/models";

let value: CreateSaleResponseData = {
  id: "7e1df7d6-e6b4-4999-8528-7630b976542b",
  invoiceNumber: 76.88,
  formattedInvoiceNumber: "<value>",
  invoiceDate: new Date("2026-04-16"),
  dueDate: new Date("2024-06-18"),
  serviceFrom: new Date("2024-10-05"),
  serviceTo: new Date("2025-10-20"),
  currency: "Kwacha",
  subtotal: 9377.97,
  taxAmount: 9919.48,
  total: 3117.6,
  balance: 5189.55,
  concept: null,
  notes: "<value>",
  fiscalNotes: "<value>",
  integrationSource: "<value>",
  integrationId: "<id>",
  customer: {
    id: "e07d9ba6-07a6-4035-9150-e1311a6e8f34",
    name: "<value>",
    email: "Gino45@gmail.com",
    phone: "1-517-968-1103",
    taxId: "<id>",
    address: "260 Maximo Lights",
    apartment: "<value>",
    city: "Shaynestead",
    province: "<value>",
  },
  items: [],
  createdAt: new Date("2024-02-29T10:45:46.198Z"),
  updatedAt: new Date("2024-05-07T06:35:53.640Z"),
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
| `customer`                                                                                    | [models.CreateSaleResponseCustomer](../models/create-sale-response-customer.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.CreateSaleResponseItem](../models/create-sale-response-item.md)[]                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |