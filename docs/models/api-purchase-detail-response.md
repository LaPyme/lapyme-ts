# ApiPurchaseDetailResponse

## Example Usage

```typescript
import { ApiPurchaseDetailResponse } from "lapyme/models";

let value: ApiPurchaseDetailResponse = {
  requestId: "<id>",
  data: {
    object: "purchase",
    id: "377416ec-a84f-4d73-b892-cbb8ddb48c44",
    tags: [
      {
        object: "tag",
        id: "9b4c6439-384c-4a58-9cf3-b39718b07048",
        scope: "customer",
        name: "<value>",
        slug: "<value>",
        color: "indigo",
        description:
          "vacantly unless nautical alongside around optimistic for lasting sometimes",
        archivedAt: new Date("2024-05-13T14:06:09.243Z"),
        createdAt: new Date("2026-03-04T18:15:09.469Z"),
        updatedAt: new Date("2026-05-06T00:20:31.712Z"),
      },
    ],
    voucherType: "<value>",
    importDocumentRole: "commercial_invoice",
    importSourcePurchaseId: "aba975a3-99b6-4021-92a8-2b75ca998fb6",
    importNationalizationStatus: "pending_nationalization",
    customsDispatchNumber: "<value>",
    supplierInvoiceNumber: "<value>",
    invoiceDate: "<value>",
    accountDate: "<value>",
    dueDate: "<value>",
    paymentTermId: "days_60",
    paymentTermDays: 99861,
    vatPerceptionAmount: 247372,
    nationalTaxAmount: 850995,
    grossIncomeTaxAmount: 741043,
    grossIncomeTaxBreakdown: [
      {
        provinceId: 602894,
        amount: 440630,
      },
    ],
    municipalTaxAmount: 754202,
    internalTaxAmount: 226597,
    otherTaxAmount: 53308,
    subtotal: 972393,
    taxAmount: 905545,
    exemptAmount: 393824,
    total: 70980,
    balance: null,
    discount: 351038,
    vatBreakdown: [
      {
        taxRateId: 380425,
        baseAmount: 96602,
        taxAmount: 638189,
      },
    ],
    notes: "<value>",
    vatCategory: "services",
    currency: "Yen",
    exchangeRate: "<value>",
    pdfPath: "<value>",
    document: {
      status: "ready",
      url: "https://serpentine-deduction.org/",
    },
    createdAt: new Date("2026-05-08T02:22:18.401Z"),
    supplier: {
      id: "6546fdb5-26f9-4663-84ea-b7d09b4ff696",
      name: "<value>",
      email: "Verna.Torphy30@gmail.com",
      phone: "932.237.6359 x69615",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      address: "602 Memorial Drive",
      city: "Tatumboro",
      provinceId: "<id>",
      postalCode: "82319",
      paymentTermId: "<id>",
      paymentTermDays: 248808,
    },
    warehouse: null,
    productsReceived: true,
    productsReturned: false,
    inventoryEffect: "return_to_supplier",
    items: [
      {
        id: "e9348e3a-53a6-4dad-9082-160978f48bba",
        name: "<value>",
        quantity: 9160.72,
        unitCost: 533083,
        subtotal: 407898,
        taxRateId: 225470,
        isExempt: false,
        total: 746723,
        discountPercentage: 967,
        purchaseOrderItemId: "37ffd411-cb53-47c9-a857-450aa04cfaf1",
        vatCategory: "leases",
        product: {
          id: "936a381b-104c-4188-8dce-b2d9e260cfa7",
          sku: "<value>",
          name: "<value>",
          productType: "product",
        },
        purchaseOrder: {
          id: "e9d14f84-d18f-4683-9cea-d94a7198eac5",
          formattedOrderNumber: "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `requestId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [models.ApiPurchaseDetail](../models/api-purchase-detail.md) | :heavy_check_mark:                                           | N/A                                                          |