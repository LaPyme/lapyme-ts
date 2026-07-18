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
      document: {
        status: "failed",
        url: "https://unhappy-hexagon.org",
      },
      createdAt: new Date("2024-03-31T10:42:00.072Z"),
      supplier: {
        id: null,
        name: "<value>",
        email: "Otilia.Schinner33@hotmail.com",
        phone: "873.349.5342 x38674",
        taxId: "<id>",
        taxIdType: null,
        taxCategory: "<value>",
        address: "99464 Tatum Harbors",
        city: "Taunton",
        provinceId: "<id>",
        postalCode: "12993",
        paymentTermId: "<id>",
      },
      warehouse: null,
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