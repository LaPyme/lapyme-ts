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
      costTargetPurchaseId: "6f96634e-ab7d-409b-84ff-6962e55fee44",
      customsDispatchNumber: "<value>",
      supplierInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      accountDate: "<value>",
      dueDate: "<value>",
      paymentTermId: null,
      paymentTermDays: 750322,
      vatPerceptionAmount: 332960,
      nationalTaxAmount: 996474,
      grossIncomeTaxAmount: 931386,
      grossIncomeTaxBreakdown: [
        {
          provinceId: 120615,
          amount: 564132,
        },
      ],
      municipalTaxAmount: 988088,
      internalTaxAmount: 926429,
      otherTaxAmount: 577780,
      subtotal: null,
      taxAmount: 708694,
      exemptAmount: 690300,
      total: 913771,
      balance: 967413,
      discount: 209231,
      vatBreakdown: [
        {
          taxRateId: 261853,
          baseAmount: 375951,
          taxAmount: 159146,
        },
      ],
      notes: "<value>",
      vatCategory: "goods",
      currency: "Egyptian Pound",
      exchangeRate: "<value>",
      pdfPath: null,
      document: {
        status: "pending",
        url: "https://powerless-teammate.name",
      },
      createdAt: new Date("2024-07-26T03:54:39.473Z"),
      supplier: {
        id: "e3a53a6d-ad08-4216-9097-8f48bba46ec8",
        name: "<value>",
        email: "Cassandra_Krajcik82@gmail.com",
        phone: "599.820.0773",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        address: "4423 Marcellus Plaza",
        city: null,
        provinceId: "<id>",
        postalCode: "69058-5461",
        paymentTermId: "<id>",
        paymentTermDays: 218476,
      },
      warehouse: {
        id: "1b104c18-8dce-4b2d-b9e2-60cfa73eef22",
        name: "<value>",
      },
      productsReceived: false,
      productsReturned: false,
      inventoryEffect: "none",
      items: [],
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiPurchaseDetailResponse](../../models/api-purchase-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |