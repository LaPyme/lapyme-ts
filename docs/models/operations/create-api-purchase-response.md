# CreateApiPurchaseResponse

## Example Usage

```typescript
import { CreateApiPurchaseResponse } from "lapyme/models/operations";

let value: CreateApiPurchaseResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
        manualAccountAllocations: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        items: [
          {
            productId: "e997d052-a78b-4592-8380-e1531f4b5858",
            productName: "<value>",
            sku: "<value>",
            name: "<value>",
            quantity: 4641.85,
            unitCost: 687278,
            subtotal: 787901,
            total: 269118,
            taxRateId: null,
            isExempt: true,
            discountPercentage: 5857.12,
            purchaseOrderItemId: "f5b1694d-7399-4277-b067-73f7df46c7f9",
            vatCategory: "services",
            accountId: "770d78b2-5acd-4098-b8ef-0c17a2e418ec",
            accountName: "<value>",
            costCenter1Id: "c5e0376c-b81f-4dc3-9aa0-c394392b999e",
            costCenter1Name: "<value>",
            costCenter2Id: "3bc992e1-f850-4f16-bd8e-be5e2a0412a5",
            costCenter2Name: "<value>",
            costCenter3Id: "9b840982-40dd-41f0-998c-8c31d799b51d",
            costCenter3Name: "<value>",
          },
        ],
      },
      projectedEffects: {
        inventory: {
          willReceiveProducts: true,
          willCreateReceipt: true,
          willIncreaseDirectStock: false,
          warehouseId: null,
          productLineCount: 361211,
          totalQuantity: 3746.46,
          purchaseOrderIds: [
            "2a880da3-b1c3-42ea-b066-283d50d0fcf1",
            "f5c6378e-0016-4416-bf0b-6e2cb0de1fd4",
            "98388518-9910-410a-862b-388a43f37026",
          ],
        },
        accounting: {
          willCreateJournalEntry: false,
          currency: "PES",
          exchangeRate: 8636.37,
        },
      },
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `result`                                                                                                  | [models.ApiPurchaseTransactionSuccessResponse](../../models/api-purchase-transaction-success-response.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |