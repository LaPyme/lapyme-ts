# CreateSaleResponse

## Example Usage

```typescript
import { CreateSaleResponse } from "lapyme/models/operations";

let value: CreateSaleResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "43f4df7b-d20a-4a85-b6aa-8f733bce1b1d",
      invoiceNumber: 4723.23,
      formattedInvoiceNumber: null,
      invoiceDate: new Date("2026-04-21"),
      dueDate: new Date("2025-02-12"),
      serviceFrom: null,
      serviceTo: new Date("2025-07-01"),
      currency: "Som",
      subtotal: 608.95,
      taxAmount: 6548.33,
      total: 2337.79,
      balance: 6663.09,
      concept: 6473.28,
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
      items: [
        {
          id: "a59690bb-3927-4202-acb4-b939a06b5adf",
          quantity: 3699.16,
          unitPrice: 9901.06,
          unitCost: 1750.69,
          taxRateId: 1896.69,
          discountPercentage: "<value>",
          product: {
            id: "1f5d96d0-5cf8-4597-8043-6f0141ee1955",
            name: "<value>",
            sku: "<value>",
          },
          warehouse: {
            id: "2ea6077b-6aa7-4f40-8b23-a05bc5a44296",
            name: "<value>",
          },
        },
      ],
      createdAt: new Date("2024-11-16T02:47:06.195Z"),
      updatedAt: new Date("2026-12-31T18:46:38.088Z"),
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `headers`                                                         | Record<string, *string*[]>                                        | :heavy_check_mark:                                                | N/A                                                               |
| `result`                                                          | [models.CreateSaleResponse](../../models/create-sale-response.md) | :heavy_check_mark:                                                | N/A                                                               |