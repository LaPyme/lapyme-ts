# V2PurchaseDetailResponse

## Example Usage

```typescript
import { V2PurchaseDetailResponse } from "lapyme/models";

let value: V2PurchaseDetailResponse = {
  requestId: "<id>",
  success: true,
  data: {
    id: "2f7b68a4-6be0-4699-b33b-493efc0f90ae",
    voucherType: "<value>",
    importDocumentRole: null,
    importSourcePurchaseId: null,
    importNationalizationStatus: "pending_nationalization",
    despachoNumber: "<value>",
    supplierInvoiceNumber: "<value>",
    invoiceDate: "<value>",
    accountDate: "<value>",
    dueDate: "<value>",
    paymentTermId: "days_30",
    percepIVA: 913531,
    nacionales: null,
    iibb: 991382,
    iibbBreakdown: [],
    municipales: 994810,
    internos: 941790,
    otros: 697210,
    subtotal: 695454,
    taxAmount: 185344,
    exemptAmount: 408260,
    total: null,
    balance: null,
    discount: 921228,
    ivaBreakdown: [
      {
        taxRateId: 692235,
        baseAmount: 513670,
        taxAmount: 294054,
      },
    ],
    notes: "<value>",
    rubroIva: "bienes",
    currency: "Naira",
    exchangeRate: "<value>",
    pdfPath: "<value>",
    createdAt: new Date("2026-05-19T23:45:37.191Z"),
    supplier: {
      id: "81864525-6e4a-48b4-96f7-c0b01031a71b",
      name: "<value>",
      email: "Kyle.Bailey96@hotmail.com",
      phone: null,
      taxId: "<id>",
      taxIdType: "<value>",
      taxCategory: "<value>",
      address: "7085 Bramble Close",
      city: "Yadiramouth",
      provinceId: "<id>",
      postalCode: null,
      paymentTermId: "<id>",
    },
    warehouse: {
      id: "2d665a71-5746-4391-8d28-8c74d3f42f60",
      name: "<value>",
    },
    items: [
      {
        id: "e2f2c741-2254-4f53-ba77-e96f10d126dd",
        name: "<value>",
        quantity: 2361.66,
        unitCost: 393730,
        subtotal: 313950,
        taxRateId: 656421,
        isExempt: true,
        total: 659442,
        discountPercentage: 393.74,
        purchaseOrderItemId: "3488c853-7114-4c6d-b62e-6444a6bc6e1b",
        rubroIva: "locaciones",
        product: {
          id: "97eec961-72f7-45ff-aee5-405760104275",
          sku: "<value>",
          name: null,
          productType: "combo",
        },
        purchaseOrder: {
          id: "5429734a-964a-4a62-90aa-c6b6daef9e91",
          formattedOrderNumber: "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `success`                                                                            | *true*                                                                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.V2PurchaseDetailResponseData](../models/v2-purchase-detail-response-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |