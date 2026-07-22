# UpdateApiPurchaseResponse

## Example Usage

```typescript
import { UpdateApiPurchaseResponse } from "lapyme/models/operations";

let value: UpdateApiPurchaseResponse = {
  headers: {},
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
      paymentTermDays: 380153,
      vatPerceptionAmount: null,
      nationalTaxAmount: 247372,
      grossIncomeTaxAmount: 850995,
      grossIncomeTaxBreakdown: [],
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
        paymentTermDays: null,
      },
      warehouse: {
        id: "cb58faea-196f-4cef-8904-b7b7e4f63e46",
        name: "<value>",
      },
      items: [
        {
          id: "a3306caa-e934-48e3-9a53-a6dad0821609",
          name: "<value>",
          quantity: 9490.18,
          unitCost: 540074,
          subtotal: 748637,
          taxRateId: 284317,
          isExempt: false,
          total: 533083,
          discountPercentage: 4078.98,
          purchaseOrderItemId: "32d7bd16-37ff-4d41-a1cb-537c9857450a",
          vatCategory: null,
          product: {
            id: "cfaf19d9-6936-4a38-a1b1-04c188dceb2d",
            sku: "<value>",
            name: "<value>",
            productType: "product",
          },
          purchaseOrder: {
            id: "fa73eef2-2e9d-414f-a84d-18f683cead94",
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