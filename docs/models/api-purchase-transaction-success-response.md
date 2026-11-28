# ApiPurchaseTransactionSuccessResponse

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponse } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponse = {
  requestId: "<id>",
  data: {
    purchaseId: "6dd1b238-9527-4876-a593-18e2238c2cbb",
    receiptCreated: true,
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
  },
  warnings: [],
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `data`                                                                                                          | [models.ApiPurchaseTransactionSuccessResponseData](../models/api-purchase-transaction-success-response-data.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `warnings`                                                                                                      | *models.ApiPurchaseTransactionSuccessResponseWarning2*[]                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |