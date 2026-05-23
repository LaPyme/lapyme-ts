# V2PurchaseCommitResponseData

## Example Usage

```typescript
import { V2PurchaseCommitResponseData } from "lapyme/models";

let value: V2PurchaseCommitResponseData = {
  purchaseId: "5addd7fb-3a73-4d55-a6db-9144cb4c603b",
  receiptCreated: false,
  idempotentReplay: true,
  normalizedPurchase: {
    supplierId: "e794a142-0999-4d23-8e9d-d313c7112ec6",
    voucherType: 126342,
    supplierInvoiceNumber: "<value>",
    invoiceDate: "<value>",
    accountDate: "<value>",
    dueDate: "<value>",
    paymentTermId: "days_15",
    importDocumentRole: "despacho",
    importSourcePurchaseId: "311555f4-9006-4444-afc8-d18583cb9331",
    importNationalizationStatus: "fully_nationalized",
    despachoNumber: "<value>",
    warehouseId: "89709144-cf26-4b25-82e2-4a53251dcdcf",
    productsReceived: false,
    updateProductVariantCost: true,
    currency: "DOL",
    exchangeRate: 4119,
    subtotal: 688076,
    taxAmount: 658221,
    total: 445441,
    discount: 507156,
    exemptAmount: 391309,
    noGravado: 954380,
    importe: 565649,
    percepIVA: 649778,
    nacionales: 274230,
    iibb: 902548,
    municipales: 769129,
    internos: 330650,
    otros: 790178,
    notes: "<value>",
    pdfPath: "<value>",
    items: [
      {
        productId: "0b24a862-1c3b-4972-8a57-d66a402fa6dc",
        productName: "<value>",
        sku: "<value>",
        name: null,
        quantity: 8197.07,
        unitCost: 867029,
        subtotal: 276300,
        total: 528056,
        taxRateId: 600990,
        isExempt: true,
        discountPercentage: 4613.92,
        purchaseOrderItemId: "b33ded60-d506-4b23-b05d-7d44e5726dd4",
        rubroIva: "locaciones",
      },
    ],
  },
  projectedEffects: {
    inventory: {
      willReceiveProducts: true,
      willCreateReceipt: true,
      willIncreaseDirectStock: false,
      warehouseId: "a6460754-e9ef-42ba-a925-ae305bc8fac5",
      productLineCount: 947017,
      totalQuantity: 1801.76,
      purchaseOrderIds: [
        "657d1a09-224e-4a93-803d-e07b1cd4b1e9",
      ],
    },
    accounting: {
      willCreateJournalEntry: false,
      currency: "DOL",
      exchangeRate: 7264.49,
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `purchaseId`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `receiptCreated`                                                                                                  | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `idempotentReplay`                                                                                                | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `normalizedPurchase`                                                                                              | [models.V2PurchaseCommitResponseNormalizedPurchase](../models/v2-purchase-commit-response-normalized-purchase.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `projectedEffects`                                                                                                | [models.V2PurchaseCommitResponseProjectedEffects](../models/v2-purchase-commit-response-projected-effects.md)     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |