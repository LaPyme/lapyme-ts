# Sale

## Example Usage

```typescript
import { Sale } from "lapyme/models";

let value: Sale = {
  id: "0ccd686c-7650-4381-a54c-ab4acdfcc31e",
  invoiceNumber: 2593.97,
  formattedInvoiceNumber: "<value>",
  invoiceDate: new Date("2025-07-28"),
  dueDate: new Date("2026-12-10"),
  serviceFrom: new Date("2025-05-22"),
  serviceTo: new Date("2026-11-27"),
  currency: "Indian Rupee",
  subtotal: 1621.63,
  taxAmount: 1705.81,
  total: 2007.1,
  balance: 4587.96,
  concept: 137.45,
  notes: "<value>",
  fiscalNotes: "<value>",
  integrationSource: "<value>",
  integrationId: "<id>",
  customer: {
    id: "67aec1cb-c728-462b-977a-1037dac67a14",
    name: "<value>",
    email: "Lawson84@hotmail.com",
    phone: "357-786-7364",
    taxId: "<id>",
    address: "5771 Electa Rapids",
    apartment: "<value>",
    city: "Port Maxwellchester",
    province: "<value>",
  },
  items: [
    {
      id: "acb974d1-56d1-4d2a-b4ef-c51a49267168",
      quantity: 6080.53,
      unitPrice: 9130.73,
      unitCost: 3245.62,
      taxRateId: 6791.02,
      discountPercentage: "<value>",
      product: {
        id: "00fe674c-cb98-43e3-bb3c-aa5719b21075",
        name: "<value>",
        sku: "<value>",
      },
      warehouse: {
        id: "924fe1f7-d55b-4fa8-96e5-e97e2c487182",
        name: "<value>",
      },
    },
  ],
  createdAt: new Date("2024-02-20T18:12:58.451Z"),
  updatedAt: new Date("2025-10-31T23:37:04.368Z"),
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
| `customer`                                                                                    | [models.SaleCustomer](../models/sale-customer.md)                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.SaleItem](../models/sale-item.md)[]                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |