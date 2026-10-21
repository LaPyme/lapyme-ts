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
      productsReturned: true,
      inventoryEffect: "receive",
      updateProductVariantCost: false,
      currency: "USD",
      exchangeRate: 8347.02,
      subtotal: 68626,
      taxAmount: 889192,
      total: 889627,
      discount: 339829,
      exemptAmount: 8934,
      nonTaxedAmount: 563936,
      baseAmount: 509233,
      vatPerceptionAmount: 477669,
      nationalTaxAmount: 83440,
      grossIncomeTaxAmount: 173134,
      municipalTaxAmount: null,
      internalTaxAmount: null,
      otherTaxAmount: 898578,
      notes: "<value>",
      pdfPath: "<value>",
      manualAccountAllocations: {},
      items: [],
    },
    projectedEffects: {
      inventory: {
        willReceiveProducts: false,
        willCreateReceipt: true,
        willIncreaseDirectStock: false,
        willReturnProducts: true,
        willDecreaseDirectStock: true,
        inventoryEffect: "none",
        warehouseId: "0dc4d2e4-e0c6-4b0b-9f72-f95e997d052a",
        productLineCount: 518431,
        totalQuantity: 6876.38,
        purchaseOrderIds: [
          "92380e15-31f4-4b58-a580-fbf7a7cd4134",
        ],
      },
      accounting: {
        willCreateJournalEntry: true,
        currency: "USD",
        exchangeRate: 3729.64,
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