# ApiSaleTransactionSuccessResponseData

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseData } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseData = {
  sale: {
    saleId: "ddff1602-3cd7-494b-a674-0c2e082bcec1",
    invoicePdf: "<value>",
    customerId: "cef0d7b4-adad-4ed4-b1bc-6dabcd4e141f",
    voucherType: "<value>",
    pointOfSaleId: "ffaaba41-8aee-4d0c-b542-a1077b224a4a",
    invoiceNumber: null,
    formattedInvoiceNumber: null,
    invoiceStatus: "not_required",
    invoiceDate: new Date("2025-09-12"),
    dueDate: new Date("2025-06-27"),
    currency: "Belize Dollar",
    subtotal: 479097,
    taxAmount: 932504,
    total: 714607,
    exemptAmount: 486281,
    nonTaxedAmount: 977186,
    tributesAmount: 560602,
    discountAmount: 828162,
    balance: 2213.99,
    createdAt: new Date("2026-04-06T18:52:26.062Z"),
  },
  normalizedSale: {
    customerId: "276cbb7e-71d4-401e-ada4-85a3e5231d6b",
    customerTaxCategoryOverride: "<value>",
    voucherType: 8645.5,
    pointOfSaleId: "39ef4b2c-db1b-45ca-9544-e9cb53b0dc6c",
    registerId: "e52b151d-b608-4a1d-8766-4987bf8358ad",
    operatorId: "fc3abb35-2289-46b9-91c0-282f0956dfcb",
    invoiceDate: new Date("2024-06-17"),
    dueDate: new Date("2025-12-30"),
    transferType: "SCA",
    serviceFrom: new Date("2026-07-01"),
    serviceTo: new Date("2024-02-04"),
    currency: "USD",
    exchangeRate: 8932.6,
    sameCurrencyPayment: true,
    notes: null,
    subtotal: 444543,
    taxAmount: 512767,
    total: 92870,
    exemptAmount: 311428,
    nonTaxedAmount: 933761,
    tributesAmount: 785245,
    nationalPerceptionAmount: 981554,
    grossIncomePerceptionAmount: 484461,
    grossIncomeTaxBreakdown: [],
    municipalPerceptionAmount: 454441,
    internalTributeAmount: 459257,
    uncategorizedVatPerceptionAmount: 733084,
    otherTributeAmount: 667959,
    discountType: "percentage",
    discountValue: null,
    discountAmount: 47491,
    balance: 8648.13,
    isFullAmountPending: true,
    items: [],
    paymentMethods: [
      {
        methodId: "ae006673-b6b7-4a0d-9819-06929677cdaf",
        amount: 186311,
        description: "miserably oof throughout subsidy er floodlight",
        reference: "<value>",
        feeAmount: 229932,
        terminalId: "8514dae7-5282-4b11-8e2d-ef058a36bb27",
        cardBatchNumber: "<value>",
        cardCouponNumber: "<value>",
        cardInstallmentPlanCode: "<value>",
        cardBrand: "<value>",
        cashSource: {
          type: "safe",
          id: "d6fcb9e4-63c1-459b-9c2f-ed437ee521e3",
        },
      },
    ],
  },
  projectedEffects: {
    inventory: {
      willAffectStock: false,
      warehouseIds: [
        "4bb7be18-22a7-47b8-83df-d4bfe362da42",
        "a76c9b90-3661-4363-82e7-1534c51f2252",
      ],
      productLineCount: 372406,
      totalQuantity: 7853.89,
    },
    accounting: {
      willCreateSaleEntry: false,
      willCreatePaymentEntry: false,
    },
    fiscal: {
      invoiceStatus: "pending",
    },
    payments: {
      willCreatePayments: true,
      paymentMethodCount: 5824,
      totalAmount: 1879.15,
      pendingAmount: 2077.06,
    },
  },
  idempotentReplay: false,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `sale`                                                                                                                           | [models.Sale](../models/sale.md)                                                                                                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `normalizedSale`                                                                                                                 | [models.NormalizedSale](../models/normalized-sale.md)                                                                            | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `projectedEffects`                                                                                                               | [models.ApiSaleTransactionSuccessResponseProjectedEffects](../models/api-sale-transaction-success-response-projected-effects.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `idempotentReplay`                                                                                                               | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |