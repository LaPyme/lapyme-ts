# GetApiPurchaseByIdResponse

## Example Usage

```typescript
import { GetApiPurchaseByIdResponse } from "lapyme/models/operations";

let value: GetApiPurchaseByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "purchase",
      id: "377416ec-a84f-4d73-b892-cbb8ddb48c44",
      tags: [
        {
          object: "tag",
          id: "d17aba97-5a39-49b6-b021-2a82b75ca998",
          scope: "purchase_order",
          name: "<value>",
          slug: "<value>",
          color: "yellow",
          description: "natural huzzah heavenly",
          archivedAt: new Date("2024-12-06T02:21:59.305Z"),
          createdAt: new Date("2024-02-28T10:14:14.640Z"),
          updatedAt: new Date("2025-08-18T02:43:21.277Z"),
        },
      ],
      voucherType: "<value>",
      importDocumentRole: "commercial_invoice",
      importSourcePurchaseId: "b6e10858-61af-4fe6-be18-0b3ec2c6546f",
      importNationalizationStatus: "partially_nationalized",
      customsDispatchNumber: "<value>",
      supplierInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      accountDate: "<value>",
      dueDate: "<value>",
      paymentTermId: "days_15",
      paymentTermDays: 879381,
      vatPerceptionAmount: 743008,
      nationalTaxAmount: 821216,
      grossIncomeTaxAmount: null,
      grossIncomeTaxBreakdown: [
        {
          provinceId: 696510,
          amount: 290295,
        },
      ],
      municipalTaxAmount: 996660,
      internalTaxAmount: 620321,
      otherTaxAmount: 169747,
      subtotal: 362311,
      taxAmount: 956787,
      exemptAmount: 887906,
      total: 303555,
      balance: 267881,
      discount: 907804,
      vatBreakdown: [],
      notes: "<value>",
      vatCategory: null,
      currency: "Quetzal",
      exchangeRate: "<value>",
      pdfPath: "<value>",
      document: {
        status: "failed",
        url: "https://yummy-optimal.org",
      },
      createdAt: new Date("2026-01-14T18:52:22.081Z"),
      supplier: {
        id: "6fcef904-b7b7-4e4f-b63e-462ea3306caa",
        name: "<value>",
        email: "Katelynn_Ebert34@gmail.com",
        phone: "1-868-251-0305 x459",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        address: "349 N Lincoln Street",
        city: "Nickburgh",
        provinceId: "<id>",
        postalCode: "78032",
        paymentTermId: "<id>",
        paymentTermDays: 947835,
      },
      warehouse: {
        id: "411cb537-c985-4745-80aa-04cfaf19d969",
        name: "<value>",
      },
      productsReceived: true,
      productsReturned: false,
      inventoryEffect: "none",
      items: [
        {
          id: "1b104c18-8dce-4b2d-b9e2-60cfa73eef22",
          name: "<value>",
          quantity: 8141.39,
          unitCost: 254816,
          subtotal: 548972,
          taxRateId: 827612,
          isExempt: false,
          total: 420009,
          discountPercentage: 2304.37,
          purchaseOrderItemId: "ead94a71-98ea-4c54-95a5-a230f54b7c50",
          vatCategory: "services",
          product: null,
          purchaseOrder: {
            id: "81569cfd-6d99-4b52-9caa-3bbc5bac7477",
            formattedOrderNumber: "<value>",
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiPurchaseDetailResponse](../../models/api-purchase-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |