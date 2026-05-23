# V2PurchaseTransactionSuccessResponse


## Supported Types

### `models.V2PurchasePreviewResponse`

```typescript
const value: models.V2PurchasePreviewResponse = {
  requestId: "<id>",
  success: true,
  mode: "preview",
  data: {
    normalizedPurchase: {
      supplierId: "66d52b14-c9cb-4f7e-97d0-5f154000c350",
      voucherType: 687809,
      supplierInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      accountDate: "<value>",
      dueDate: null,
      paymentTermId: "days_30_60_90",
      importDocumentRole: "despacho_reversal",
      importSourcePurchaseId: null,
      importNationalizationStatus: "partially_nationalized",
      despachoNumber: "<value>",
      warehouseId: "1ac0ee55-bb3d-444e-821f-423c5d68f75b",
      productsReceived: true,
      updateProductVariantCost: true,
      currency: "PES",
      exchangeRate: 3880.46,
      subtotal: 59407,
      taxAmount: 624856,
      total: 998218,
      discount: 608843,
      exemptAmount: null,
      noGravado: 185244,
      importe: 997655,
      percepIVA: null,
      nacionales: 54969,
      iibb: null,
      municipales: 116103,
      internos: 247498,
      otros: 280959,
      notes: "<value>",
      pdfPath: "<value>",
      items: [],
    },
    projectedEffects: {
      inventory: {
        willReceiveProducts: false,
        willCreateReceipt: false,
        willIncreaseDirectStock: false,
        warehouseId: "d8dcdddc-e40a-427c-9b3d-16dcc8a22fe4",
        productLineCount: 207579,
        totalQuantity: 3991.75,
        purchaseOrderIds: [],
      },
      accounting: {
        willCreateJournalEntry: true,
        currency: "PES",
        exchangeRate: 3333.34,
      },
    },
  },
  warnings: [
    {
      code: "<value>",
      message: "<value>",
    },
  ],
  blockingIssues: [],
};
```

### `models.V2PurchaseCommitResponse`

```typescript
const value: models.V2PurchaseCommitResponse = {
  requestId: "<id>",
  success: true,
  mode: "commit",
  data: {
    purchaseId: "fb9cbf0f-f840-42d7-bf45-7420cc39e311",
    receiptCreated: true,
    idempotentReplay: false,
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
  },
  warnings: [],
  blockingIssues: [
    {
      code: "<value>",
      message: "<value>",
    },
  ],
};
```

