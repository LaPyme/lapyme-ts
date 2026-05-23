# V2PurchasePreviewResponseData

## Example Usage

```typescript
import { V2PurchasePreviewResponseData } from "lapyme/models";

let value: V2PurchasePreviewResponseData = {
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
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `normalizedPurchase`                                                                                                | [models.V2PurchasePreviewResponseNormalizedPurchase](../models/v2-purchase-preview-response-normalized-purchase.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `projectedEffects`                                                                                                  | [models.V2PurchasePreviewResponseProjectedEffects](../models/v2-purchase-preview-response-projected-effects.md)     | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |