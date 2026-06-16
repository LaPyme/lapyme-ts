# ApiPurchaseDetailResponse

## Example Usage

```typescript
import { ApiPurchaseDetailResponse } from "lapyme/models";

let value: ApiPurchaseDetailResponse = {
  requestId: "<id>",
  data: {
    object: "purchase",
    id: "377416ec-a84f-4d73-b892-cbb8ddb48c44",
    voucherType: "<value>",
    importDocumentRole: "customs_dispatch_reversal",
    importSourcePurchaseId: "7aba975a-399b-4602-912a-82b75ca998fb",
    importNationalizationStatus: "fully_nationalized",
    customsDispatchNumber: null,
    supplierInvoiceNumber: "<value>",
    invoiceDate: "<value>",
    accountDate: "<value>",
    dueDate: "<value>",
    paymentTermId: "days_30_60",
    vatPerceptionAmount: 380153,
    nationalTaxAmount: null,
    grossIncomeTaxAmount: 247372,
    grossIncomeTaxBreakdown: [
      {
        provinceId: 850995,
        amount: 165215,
      },
    ],
    municipalTaxAmount: 947007,
    internalTaxAmount: 440630,
    otherTaxAmount: 754202,
    subtotal: 226597,
    taxAmount: 53308,
    exemptAmount: 972393,
    total: 905545,
    balance: 393824,
    discount: 70980,
    vatBreakdown: [],
    notes: "<value>",
    vatCategory: "leases",
    currency: "Bhutanese Ngultrum",
    exchangeRate: "<value>",
    pdfPath: null,
    createdAt: new Date("2025-11-30T10:54:29.867Z"),
    supplier: {
      id: "e6e180b3-ec2c-4654-a6fd-b526f96634ea",
      name: "<value>",
      email: "Kiara_Greenfelder@gmail.com",
      phone: "1-393-498-8231 x299",
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: null,
      address: "735 Poplar Street",
      city: "Cartwrightstad",
      provinceId: "<id>",
      postalCode: "99502-7464",
      paymentTermId: "<id>",
    },
    warehouse: {
      id: "f63e462e-a330-46ca-bae9-348e3a53a6da",
      name: "<value>",
    },
    items: [],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiPurchaseDetailResponseData](../models/api-purchase-detail-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |