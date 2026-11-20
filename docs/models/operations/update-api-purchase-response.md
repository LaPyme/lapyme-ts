# UpdateApiPurchaseResponse

## Example Usage

```typescript
import { UpdateApiPurchaseResponse } from "lapyme/models/operations";

let value: UpdateApiPurchaseResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
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
          id: "fd0e6eb6-e290-4396-ab35-a8ca83534491",
          scope: "customer",
          name: "<value>",
          slug: "<value>",
          color: "blue",
          description:
            "striking angrily oily brightly commandeer justly where unto",
          archivedAt: new Date("2024-07-02T07:10:54.132Z"),
          createdAt: new Date("2025-08-08T00:49:49.551Z"),
          updatedAt: new Date("2026-07-18T06:36:50.529Z"),
        },
      ],
      voucherType: "<value>",
      importDocumentRole: "commercial_invoice",
      importSourcePurchaseId: "399b6021-2a82-4b75-aca9-98fb65f136c5",
      importNationalizationStatus: "partially_nationalized",
      costTargetPurchaseId: "1c3ed2bf-97cc-4534-a08f-2eb6e1085861",
      customsDispatchNumber: "<value>",
      supplierInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      accountDate: "<value>",
      dueDate: "<value>",
      paymentTermId: null,
      paymentTermDays: 21946,
      vatPerceptionAmount: 227218,
      nationalTaxAmount: 782937,
      grossIncomeTaxAmount: 796005,
      grossIncomeTaxBreakdown: [],
      municipalTaxAmount: 287276,
      internalTaxAmount: 976564,
      otherTaxAmount: 728860,
      subtotal: 170985,
      taxAmount: 998921,
      exemptAmount: 387896,
      total: 217982,
      balance: 879381,
      discount: 743008,
      vatBreakdown: [],
      notes: "<value>",
      vatCategory: null,
      currency: "Mauritius Rupee",
      exchangeRate: "<value>",
      pdfPath: "<value>",
      document: {
        status: "pending",
        url: "https://impressionable-oil.info",
      },
      createdAt: new Date("2024-07-05T01:01:36.838Z"),
      supplier: {
        id: "5fee4424-fe54-405c-8b58-faea196fcef9",
        name: "<value>",
        email: "Maryjane.Volkman@yahoo.com",
        phone: "1-431-962-2047 x66861",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        address: "4164 S 9th Street",
        city: "New Callieton",
        provinceId: "<id>",
        postalCode: null,
        paymentTermId: "<id>",
        paymentTermDays: 559893,
      },
      warehouse: {
        id: "48bba46e-c856-4c32-ad7b-d1637ffd411c",
        name: "<value>",
      },
      productsReceived: true,
      productsReturned: true,
      inventoryEffect: "receive",
      items: [
        {
          id: "9857450a-a04c-4faf-919d-96936a381b10",
          name: "<value>",
          quantity: 1182.31,
          unitCost: 546323,
          subtotal: 795119,
          taxRateId: 714040,
          isExempt: false,
          isCustomsCharge: false,
          customsChargeInTaxableBase: false,
          total: 407372,
          discountPercentage: null,
          purchaseOrderItemId: "fa73eef2-2e9d-414f-a84d-18f683cead94",
          vatCategory: "goods",
          product: {
            id: "8eac545a-5a23-40f5-a4b7-c5054e0c8156",
            sku: "<value>",
            supplierSku: "<value>",
            name: "<value>",
            productType: "kit",
          },
          purchaseOrder: {
            id: "9b52caa3-bbc5-4bac-8747-742526537a10",
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