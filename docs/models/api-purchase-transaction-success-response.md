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
      paymentTermId: "days_45",
      paymentTermDays: 781035,
      importDocumentRole: null,
      importSourcePurchaseId: "bfb9e1ca-4e54-417b-a91a-08aa2d9c602a",
      importNationalizationStatus: "pending_nationalization",
      costTargetPurchaseId: "63898d41-2ede-4b59-b0f9-8867719200be",
      customsDispatchNumber: "<value>",
      warehouseId: "491a461d-0dc4-4d2e-a4e0-c6b0bf72f95e",
      productsReceived: false,
      productsReturned: true,
      inventoryEffect: "return_to_supplier",
      updateProductVariantCost: true,
      currency: "ARS",
      exchangeRate: 1453.21,
      subtotal: 457607,
      taxAmount: 687638,
      total: 568510,
      discount: 189394,
      exemptAmount: 32907,
      nonTaxedAmount: 78930,
      baseAmount: 201891,
      vatPerceptionAmount: 995767,
      nationalTaxAmount: 720929,
      grossIncomeTaxAmount: 541249,
      municipalTaxAmount: 527856,
      internalTaxAmount: null,
      otherTaxAmount: 720422,
      notes: "<value>",
      pdfPath: "<value>",
      manualAccountAllocations: {
        "key": "<value>",
        "key1": "<value>",
      },
      items: [],
    },
    projectedEffects: {
      inventory: {
        willReceiveProducts: false,
        willCreateReceipt: false,
        willIncreaseDirectStock: true,
        willReturnProducts: true,
        willDecreaseDirectStock: true,
        inventoryEffect: "none",
        warehouseId: "2f5b1694-d739-4927-a706-773f7df46c7f",
        productLineCount: 964173,
        totalQuantity: 9610.75,
        purchaseOrderIds: [
          "e770d78b-25ac-4d09-b88e-f0c17a2e418e",
          "d43c5e03-76cb-481f-adc3-aa0c394392b9",
          "9e57d3bc-992e-41f8-950f-16d8ebe5e2a0",
        ],
      },
      accounting: {
        willCreateJournalEntry: true,
        currency: "ARS",
        exchangeRate: 6358.92,
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
| `warnings`                                                                                                      | [models.ApiSharedObjectc671832641](../models/api-shared-objectc671832641.md)[]                                  | :heavy_check_mark:                                                                                              | N/A                                                                                                             |