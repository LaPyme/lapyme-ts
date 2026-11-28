# ApiPurchaseTransactionSuccessResponseData

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseData } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseData = {
  purchaseId: "7049ecb3-303f-4fb0-8d5c-241d8a019dc4",
  receiptCreated: false,
  idempotentReplay: true,
  installments: [],
  normalizedPurchase: {
    supplierId: "caf68694-9d3a-4423-bb4c-d0927697ff84",
    voucherType: 718798,
    supplierInvoiceNumber: "<value>",
    invoiceDate: "<value>",
    accountDate: "<value>",
    dueDate: null,
    paymentTermDays: 488470,
    importDocumentRole: "customs_dispatch_reversal",
    importSourcePurchaseId: null,
    importNationalizationStatus: "fully_nationalized",
    costTargetPurchaseId: "b9e1ca4e-5417-4b91-8a08-aa2d9c602a87",
    customsDispatchNumber: "<value>",
    warehouseId: "3898d412-edeb-4590-9f98-867719200bec",
    productsReceived: true,
    productsReturned: true,
    inventoryEffect: "receive",
    updateProductVariantCost: true,
    currency: "USD",
    exchangeRate: 2619.4,
    subtotal: 104722,
    taxAmount: 25164,
    total: 806810,
    discount: 819730,
    exemptAmount: 885816,
    nonTaxedAmount: 913147,
    baseAmount: null,
    vatPerceptionAmount: 421499,
    nationalTaxAmount: 48818,
    incomeTaxPerceptionAmount: 940550,
    grossIncomeTaxAmount: 150898,
    municipalTaxAmount: 596180,
    internalTaxAmount: 911677,
    otherTaxAmount: 579972,
    notes: "<value>",
    pdfPath: "<value>",
    manualAccountAllocations: {},
    items: [],
  },
  projectedEffects: {
    inventory: {
      willReceiveProducts: true,
      willCreateReceipt: false,
      willIncreaseDirectStock: true,
      willReturnProducts: false,
      willDecreaseDirectStock: false,
      inventoryEffect: "none",
      warehouseId: "2380e153-1f4b-4585-880f-bf7a7cd41349",
      productLineCount: 973767,
      totalQuantity: 3729.64,
      purchaseOrderIds: [
        "1694d739-9277-4067-b73f-7df46c7f9ffd",
        "770d78b2-5acd-4098-b8ef-0c17a2e418ec",
      ],
    },
    accounting: {
      willCreateJournalEntry: true,
      currency: "ARS",
      exchangeRate: 7730.36,
    },
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                  | [models.ApiSharedObject0440e56bc9](../models/api-shared-object0440e56bc9.md)[]                                                           | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `purchaseId`                                                                                                                             | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `receiptCreated`                                                                                                                         | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `lotWarnings`                                                                                                                            | *models.ApiPurchaseTransactionSuccessResponseLotWarning*[]                                                                               | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `idempotentReplay`                                                                                                                       | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `installments`                                                                                                                           | [models.ApiSharedObjecte304e86be7](../models/api-shared-objecte304e86be7.md)[]                                                           | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `normalizedPurchase`                                                                                                                     | [models.NormalizedPurchase](../models/normalized-purchase.md)                                                                            | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `projectedEffects`                                                                                                                       | [models.ApiPurchaseTransactionSuccessResponseProjectedEffects](../models/api-purchase-transaction-success-response-projected-effects.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |