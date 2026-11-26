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
    "key2": [
      "<value 1>",
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
          id: "0e6eb6e2-9039-46b3-b5a8-ca8353449182",
          scope: "purchase_order",
          name: "<value>",
          slug: "<value>",
          color: "blue",
          description:
            "dazzling ack gee inasmuch sheepishly who lowball deliberately",
          archivedAt: new Date("2026-07-18T06:36:50.529Z"),
          createdAt: new Date("2024-07-04T20:30:22.631Z"),
          updatedAt: new Date("2026-01-11T05:59:34.900Z"),
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
      paymentTermDays: null,
      vatPerceptionAmount: 21946,
      nationalTaxAmount: 227218,
      grossIncomeTaxAmount: 782937,
      grossIncomeTaxBreakdown: [],
      municipalTaxAmount: 407047,
      internalTaxAmount: 287276,
      otherTaxAmount: 976564,
      subtotal: 728860,
      taxAmount: 170985,
      exemptAmount: 998921,
      total: 387896,
      balance: 217982,
      discount: 879381,
      vatBreakdown: [
        {
          taxRateId: 743008,
          baseAmount: 479915,
          taxAmount: 821216,
        },
      ],
      notes: null,
      vatCategory: "leases",
      currency: "Pound Sterling",
      exchangeRate: "<value>",
      pdfPath: "<value>",
      document: {
        status: "missing",
        url: "https://jealous-comestible.org",
      },
      createdAt: new Date("2025-02-01T02:14:01.004Z"),
      supplier: {
        id: "ee4424fe-5405-4cb5-a8fa-ea196fcef904",
        name: "<value>",
        email: "Tatum20@yahoo.com",
        phone: "1-396-320-4766 x861",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        address: "4164 S 9th Street",
        city: "New Callieton",
        provinceId: "<id>",
        postalCode: null,
        paymentTermDays: 446779,
      },
      warehouse: {
        id: "f48bba46-ec85-46c3-b2d7-bd1637ffd411",
        name: "<value>",
      },
      productsReceived: false,
      productsReturned: true,
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