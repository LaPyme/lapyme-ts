# ApiPurchaseDetailResponse

## Example Usage

```typescript
import { ApiPurchaseDetailResponse } from "lapyme/models";

let value: ApiPurchaseDetailResponse = {
  requestId: "<id>",
  data: {
    object: "purchase",
    id: "eaa0817e-c729-448f-8113-ae4f83f412bb",
    voucherType: "<value>",
    importDocumentRole: "customs_dispatch_reversal",
    importSourcePurchaseId: "18cdacd2-1c33-423f-aa7a-2ed6fc5ac143",
    importNationalizationStatus: "fully_nationalized",
    customsDispatchNumber: "<value>",
    supplierInvoiceNumber: "<value>",
    invoiceDate: "<value>",
    accountDate: "<value>",
    dueDate: null,
    paymentTermId: "days_15",
    vatPerceptionAmount: 900757,
    nationalTaxAmount: null,
    grossIncomeTaxAmount: 713971,
    grossIncomeTaxBreakdown: [
      {
        provinceId: 438840,
        amount: 290368,
      },
    ],
    municipalTaxAmount: 311551,
    internalTaxAmount: 313577,
    otherTaxAmount: 306941,
    subtotal: 739478,
    taxAmount: 519972,
    exemptAmount: 211356,
    total: 499042,
    balance: 950045,
    discount: 812377,
    vatBreakdown: [
      {
        taxRateId: 997093,
        baseAmount: 902893,
        taxAmount: 363235,
      },
    ],
    notes: "<value>",
    vatCategory: "leases",
    currency: "Algerian Dinar",
    exchangeRate: "<value>",
    pdfPath: "<value>",
    createdAt: new Date("2025-09-11T02:15:43.033Z"),
    supplier: {
      id: "49ed7688-e85e-4ad3-9079-d03a99d4516d",
      name: "<value>",
      email: "Marjolaine59@gmail.com",
      phone: "1-874-571-0128 x6828",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: null,
      address: "50023 Broad Lane",
      city: null,
      provinceId: "<id>",
      postalCode: "71060-4282",
      paymentTermId: "<id>",
    },
    warehouse: {
      id: "1d81895d-9d7f-44ea-9636-e0e6181dee4f",
      name: "<value>",
    },
    items: [
      {
        id: "fa933545-c089-4db9-a0d4-7c4ebd1dade9",
        name: "<value>",
        quantity: 296.7,
        unitCost: 981902,
        subtotal: null,
        taxRateId: 832634,
        isExempt: null,
        total: null,
        discountPercentage: 2292.97,
        purchaseOrderItemId: "8145a7bd-805c-4c0e-a9e7-c6afd4d05059",
        vatCategory: "services",
        product: {
          id: "baa50ef9-3144-447c-8046-7ed9a72c4875",
          sku: "<value>",
          name: "<value>",
          productType: "product",
        },
        purchaseOrder: {
          id: "451f1aff-4ff0-494e-bc56-8411ffc7f278",
          formattedOrderNumber: "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiPurchaseDetailResponseData](../models/api-purchase-detail-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |