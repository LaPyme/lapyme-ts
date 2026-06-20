# ApiSaleTransactionSuccessResponseData

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponseData } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponseData = {
  sale: {
    saleId: "ddff1602-3cd7-494b-a674-0c2e082bcec1",
    customerId: "5cef0d7b-4ada-4ded-b41b-c6dabcd4e141",
    voucherType: "<value>",
    pointOfSaleId: "dffaaba4-18ae-4ed0-ac54-2a1077b224a4",
    invoiceNumber: 71345,
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
    voucherType: 995851,
    pointOfSaleId: "d39ef4b2-cdb1-4b5c-ba54-4e9cb53b0dc6",
    registerId: "ee52b151-db60-48a1-bd76-64987bf8358a",
    operatorId: "ffc3abb3-5228-496b-a91c-0282f0956dfc",
    invoiceDate: new Date("2024-11-25"),
    dueDate: new Date("2024-06-17"),
    serviceFrom: new Date("2024-11-05"),
    serviceTo: null,
    currency: "DOL",
    exchangeRate: 9707.19,
    sameCurrencyPayment: true,
    notes: "<value>",
    subtotal: 604417,
    taxAmount: 893260,
    total: 49302,
    exemptAmount: 5958,
    nonTaxedAmount: 444543,
    tributesAmount: 512767,
    nationalPerceptionAmount: 92870,
    grossIncomePerceptionAmount: 311428,
    grossIncomeTaxBreakdown: [
      {
        provinceId: 850995,
        amount: 165215,
      },
    ],
    municipalPerceptionAmount: 785245,
    internalTributeAmount: 981554,
    uncategorizedVatPerceptionAmount: 484461,
    otherTributeAmount: 174733,
    discountType: "percentage",
    discountValue: 6679.59,
    discountAmount: 101529,
    balance: 1324.97,
    isFullAmountPending: true,
    items: [],
    paymentMethods: [
      {
        methodId: "22fae006-673b-46b7-ba0d-81906929677c",
        amount: 652697,
        description: "daddy over idle provided like caring",
        reference: "<value>",
        feeAmount: 338128,
        terminalId: "b3f8514d-ae75-4282-ab11-e2def058a36b",
        cardBatchNumber: "<value>",
        cardCouponNumber: "<value>",
        cardInstallmentPlanCode: "<value>",
        cardBrand: "<value>",
        cashSource: {
          type: "register",
          id: "79ad6fcb-9e46-43c1-859b-c2fed437ee52",
        },
      },
    ],
  },
  projectedEffects: {
    inventory: {
      willAffectStock: false,
      warehouseIds: [],
      productLineCount: 494896,
      totalQuantity: 6798.65,
    },
    accounting: {
      willCreateSaleEntry: false,
      willCreatePaymentEntry: true,
    },
    fiscal: {
      invoiceStatus: "pending",
    },
    payments: {
      willCreatePayments: false,
      paymentMethodCount: 466639,
      totalAmount: 6924.13,
      pendingAmount: 9051.44,
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