# ApiPurchaseTransactionSuccessResponseData

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseData } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseData = {
  purchaseId: "7049ecb3-303f-4fb0-8d5c-241d8a019dc4",
  receiptCreated: false,
  idempotentReplay: true,
  normalizedPurchase: {
    supplierId: "acaf6869-49d3-4a42-93b4-cd0927697ff8",
    voucherType: 948829,
    supplierInvoiceNumber: "<value>",
    invoiceDate: "<value>",
    accountDate: "<value>",
    dueDate: "<value>",
    paymentTermId: null,
    paymentTermDays: 488470,
    importDocumentRole: "customs_dispatch_reversal",
    importSourcePurchaseId: null,
    importNationalizationStatus: "fully_nationalized",
    customsDispatchNumber: "<value>",
    warehouseId: "9e1ca4e5-417b-491a-b08a-a2d9c602a871",
    productsReceived: true,
    updateProductVariantCost: true,
    currency: "DOL",
    exchangeRate: 6188.55,
    subtotal: 834702,
    taxAmount: 68626,
    total: 889192,
    discount: 889627,
    exemptAmount: 339829,
    nonTaxedAmount: 8934,
    baseAmount: 563936,
    vatPerceptionAmount: 509233,
    nationalTaxAmount: 477669,
    grossIncomeTaxAmount: 83440,
    municipalTaxAmount: 173134,
    internalTaxAmount: null,
    otherTaxAmount: null,
    notes: "<value>",
    pdfPath: "<value>",
    manualAccountAllocations: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    items: [],
  },
  projectedEffects: {
    inventory: {
      willReceiveProducts: true,
      willCreateReceipt: true,
      willIncreaseDirectStock: false,
      warehouseId: null,
      productLineCount: 655924,
      totalQuantity: 2619.4,
      purchaseOrderIds: [
        "1d0dc4d2-e4e0-4c6b-80bf-72f95e997d05",
      ],
    },
    accounting: {
      willCreateJournalEntry: false,
      currency: "PES",
      exchangeRate: 5184.31,
    },
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `purchaseId`                                                                                                                             | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `receiptCreated`                                                                                                                         | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `idempotentReplay`                                                                                                                       | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `normalizedPurchase`                                                                                                                     | [models.NormalizedPurchase](../models/normalized-purchase.md)                                                                            | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `projectedEffects`                                                                                                                       | [models.ApiPurchaseTransactionSuccessResponseProjectedEffects](../models/api-purchase-transaction-success-response-projected-effects.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |