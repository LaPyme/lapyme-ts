# GetSaleByIdResponseBody

Venta obtenida exitosamente

## Example Usage

```typescript
import { GetSaleByIdResponseBody } from "lapyme/models/operations";

let value: GetSaleByIdResponseBody = {
  success: true,
  data: {
    id: "aaf5cc08-496b-4cbe-9367-964544d0a31e",
    invoiceNumber: 3235.87,
    formattedInvoiceNumber: "<value>",
    invoiceDate: new Date("2024-03-23"),
    dueDate: new Date("2024-12-09"),
    serviceFrom: new Date("2025-04-28"),
    serviceTo: new Date("2024-08-31"),
    currency: "CFP Franc",
    subtotal: 3571.41,
    taxAmount: 3329.46,
    total: 7773.13,
    balance: null,
    concept: 2715.98,
    notes: null,
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
    createdAt: new Date("2026-05-14T01:28:59.583Z"),
    updatedAt: new Date("2024-01-24T08:47:26.994Z"),
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `success`                           | *boolean*                           | :heavy_check_mark:                  | N/A                                 | true                                |
| `data`                              | [models.Sale](../../models/sale.md) | :heavy_check_mark:                  | N/A                                 |                                     |