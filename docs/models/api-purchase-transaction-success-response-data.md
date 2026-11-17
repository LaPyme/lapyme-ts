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
    grossIncomeTaxAmount: 940550,
    municipalTaxAmount: 150898,
    internalTaxAmount: 596180,
    otherTaxAmount: 911677,
    notes: "<value>",
    pdfPath: "<value>",
    manualAccountAllocations: {
      "key": "<value>",
    },
    items: [
      {
        productId: null,
        productName: "<value>",
        sku: "<value>",
        name: "<value>",
        quantity: 4576.07,
        unitCost: 518431,
        subtotal: 329527,
        total: 156395,
        taxRateId: 514790,
        isExempt: true,
        isCustomsCharge: false,
        customsChargeInTaxableBase: true,
        discountPercentage: 2018.91,
        purchaseOrderItemId: "f4b58580-fbf7-4a7c-9d41-3492f5b1694d",
        vatCategory: "leases",
        accountId: "27706773-f7df-446c-97f9-ffde770d78b2",
        accountName: "<value>",
        costCenter1Id: "d0988ef0-c17a-42e4-a18e-cd43c5e0376c",
        costCenter1Name: "<value>",
        costCenter2Id: "fdc3aa0c-3943-492b-b999-e57d3bc992e1",
        costCenter2Name: "<value>",
        costCenter3Id: "0f16d8eb-e5e2-4a04-912a-5d4d9b840982",
        costCenter3Name: null,
      },
    ],
  },
  projectedEffects: {
    inventory: {
      willReceiveProducts: false,
      willCreateReceipt: false,
      willIncreaseDirectStock: true,
      willReturnProducts: false,
      willDecreaseDirectStock: true,
      inventoryEffect: "receive",
      warehouseId: "c8c31d79-9b51-4d61-a57b-055d2a880da3",
      productLineCount: 88701,
      totalQuantity: 7625.58,
      purchaseOrderIds: [],
    },
    accounting: {
      willCreateJournalEntry: true,
      currency: "USD",
      exchangeRate: 6513.28,
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