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
      installments: [],
      nextOpenInstallment: {
        dueDate: new Date("2024-11-19"),
        openAmount: 92845,
      },
      overdueOpenTotal: 381901,
      balanceAboveSchedule: 888364,
      object: "purchase",
      id: "ca84fd73-892c-4bb8-addb-48c44cdd17ab",
      tags: [
        {
          object: "tag",
          id: "75a399b6-0212-4a82-9b75-ca998fb65f13",
          scope: "purchase_order",
          name: "<value>",
          slug: "<value>",
          color: "teal",
          description: "huzzah heavenly until by t-shirt geez however",
          archivedAt: new Date("2026-12-06T07:31:36.084Z"),
          createdAt: new Date("2026-08-04T02:33:18.776Z"),
          updatedAt: new Date("2026-03-09T19:55:25.442Z"),
        },
      ],
      voucherType: "<value>",
      importDocumentRole: "commercial_invoice",
      importSourcePurchaseId: "f96634ea-b7d0-49b4-9ff6-962e55fee442",
      importNationalizationStatus: "fully_nationalized",
      costTargetPurchaseId: "405cb58f-aea1-496f-bcef-904b7b7e4f63",
      customsDispatchNumber: "<value>",
      supplierInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      accountDate: "<value>",
      dueDate: "<value>",
      paymentTermDays: 248808,
      vatPerceptionAmount: null,
      nationalTaxAmount: 790250,
      grossIncomeTaxAmount: 627395,
      grossIncomeTaxBreakdown: [
        {
          provinceId: 610428,
          amount: 189017,
        },
      ],
      municipalTaxAmount: 548528,
      internalTaxAmount: 211058,
      otherTaxAmount: 344011,
      subtotal: 652851,
      taxAmount: 857422,
      exemptAmount: 859503,
      total: null,
      balance: 149368,
      discount: null,
      vatBreakdown: [],
      notes: null,
      vatCategory: "fixed_assets",
      currency: "Pataca",
      exchangeRate: "<value>",
      pdfPath: "<value>",
      document: {
        status: "pending",
        url: "https://simplistic-place.biz",
      },
      createdAt: new Date("2025-03-23T10:56:15.610Z"),
      supplier: {
        id: "856c32d7-bd16-437f-9fd4-11cb537c9857",
        name: "<value>",
        email: null,
        phone: "1-227-969-0585 x4614",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        address: null,
        city: "North Dorothyfield",
        provinceId: "<id>",
        postalCode: "87871-8581",
        paymentTermDays: 52570,
      },
      warehouse: {
        id: "fa73eef2-2e9d-414f-a84d-18f683cead94",
        name: "<value>",
      },
      productsReceived: true,
      productsReturned: true,
      inventoryEffect: "return_to_supplier",
      items: [
        {
          id: "eac545a5-a230-4f54-bb7c-5054e0c81569",
          name: "<value>",
          quantity: 8166.33,
          unitCost: 874288,
          subtotal: 591549,
          taxRateId: 323804,
          isExempt: false,
          isCustomsCharge: false,
          customsChargeInTaxableBase: false,
          total: 709076,
          discountPercentage: 7566.89,
          purchaseOrderItemId: "bac74774-2526-4537-8a10-3db889e1bb68",
          vatCategory: "goods",
          product: {
            id: "b867a879-25f3-466d-a851-0617b0536e8a",
            sku: "<value>",
            supplierSku: "<value>",
            name: "<value>",
            productType: "service",
          },
          purchaseOrder: {
            id: "c89b80d9-f336-4d0a-a054-378551e431d7",
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