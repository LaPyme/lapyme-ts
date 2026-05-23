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
    importDocumentRole: "customs_dispatch",
    importSourcePurchaseId: "c07bfb9e-1ca4-4e54-817b-91a08aa2d9c6",
    importNationalizationStatus: "partially_nationalized",
    customsDispatchNumber: "<value>",
    warehouseId: "1f63898d-412e-4deb-a590-f98867719200",
    productsReceived: false,
    updateProductVariantCost: false,
    currency: "PES",
    exchangeRate: 2296.85,
    subtotal: 577523,
    taxAmount: null,
    total: 261940,
    discount: 104722,
    exemptAmount: 25164,
    nonTaxedAmount: 806810,
    baseAmount: 819730,
    vatPerceptionAmount: 885816,
    nationalTaxAmount: 913147,
    grossIncomeTaxAmount: null,
    municipalTaxAmount: 421499,
    internalTaxAmount: 48818,
    otherTaxAmount: 940550,
    notes: "<value>",
    pdfPath: "<value>",
    items: [
      {
        productId: "5e997d05-2a78-4b59-a238-0e1531f4b585",
        productName: null,
        sku: "<value>",
        name: "<value>",
        quantity: 9715.49,
        unitCost: 464185,
        subtotal: 454441,
        total: 844839,
        taxRateId: 79254,
        isExempt: true,
        discountPercentage: 5857.12,
        purchaseOrderItemId: "f5b1694d-7399-4277-b067-73f7df46c7f9",
        vatCategory: "services",
      },
    ],
  },
  projectedEffects: {
    inventory: {
      willReceiveProducts: false,
      willCreateReceipt: true,
      willIncreaseDirectStock: true,
      warehouseId: null,
      productLineCount: 852377,
      totalQuantity: 4391.22,
      purchaseOrderIds: [
        "b25acd09-88ef-40c1-87a2-e418ecd43c5e",
        "376cb81f-dc3a-4a0c-a394-392b999e57d3",
      ],
    },
    accounting: {
      willCreateJournalEntry: false,
      currency: "DOL",
      exchangeRate: 5742.06,
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