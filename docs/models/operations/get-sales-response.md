# GetSalesResponse

## Example Usage

```typescript
import { GetSalesResponse } from "lapyme/models/operations";

let value: GetSalesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: [
      {
        id: "fa1fb0b8-4149-4c5e-be89-01c341890e63",
        invoiceNumber: 5170.74,
        formattedInvoiceNumber: null,
        invoiceDate: new Date("2024-02-21"),
        dueDate: new Date("2025-03-31"),
        serviceFrom: new Date("2024-07-11"),
        serviceTo: new Date("2024-07-26"),
        currency: "Iceland Krona",
        subtotal: 3175.63,
        taxAmount: 8729.99,
        total: 7087.35,
        balance: 8536.99,
        concept: 9766.51,
        notes: "<value>",
        fiscalNotes: null,
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
        createdAt: new Date("2024-12-21T01:18:07.127Z"),
        updatedAt: new Date("2024-09-13T03:32:01.766Z"),
      },
    ],
    pagination: {
      page: 7401.73,
      limit: 9361.44,
      total: 833.49,
      totalPages: 7755.8,
    },
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `headers`                                                       | Record<string, *string*[]>                                      | :heavy_check_mark:                                              | N/A                                                             |
| `result`                                                        | [models.SalesListResponse](../../models/sales-list-response.md) | :heavy_check_mark:                                              | N/A                                                             |