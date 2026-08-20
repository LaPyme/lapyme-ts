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
    voucherType: 8645.5,
    pointOfSaleId: "39ef4b2c-db1b-45ca-9544-e9cb53b0dc6c",
    registerId: "e52b151d-b608-4a1d-8766-4987bf8358ad",
    operatorId: "fc3abb35-2289-46b9-91c0-282f0956dfcb",
    invoiceDate: new Date("2024-06-17"),
    dueDate: new Date("2025-12-30"),
    serviceFrom: new Date("2024-02-05"),
    serviceTo: new Date("2026-07-01"),
    currency: "DOL",
    exchangeRate: null,
    sameCurrencyPayment: false,
    notes: "<value>",
    subtotal: 893260,
    taxAmount: 49302,
    total: 5958,
    exemptAmount: 444543,
    nonTaxedAmount: 512767,
    tributesAmount: 92870,
    nationalPerceptionAmount: 311428,
    grossIncomePerceptionAmount: 933761,
    grossIncomeTaxBreakdown: [
      {
        provinceId: 696510,
        amount: 290295,
      },
    ],
    municipalPerceptionAmount: 981554,
    internalTributeAmount: 484461,
    uncategorizedVatPerceptionAmount: 174733,
    otherTributeAmount: 454441,
    discountType: "amount",
    discountValue: 1015.29,
    discountAmount: 132497,
    balance: 561.47,
    isFullAmountPending: true,
    items: [
      {
        productId: "2fae0066-73b6-4b7a-a0d8-1906929677cd",
        productName: "<value>",
        sku: "<value>",
        warehouseId: "77c813f1-7bc9-4a75-af6c-6672dd64813d",
        name: null,
        productType: "combo",
        quantity: 4207.27,
        unitPrice: 195040,
        unitCost: 631396,
        taxRateId: 539458,
        isExempt: true,
        discount: {
          type: "percentage",
          value: 3381.28,
        },
        notes: "<value>",
        accountId: "3f8514da-e752-482b-811e-2def058a36bb",
        lineType: "shipping",
        costCenter1Id: "a9179ad6-fcb9-4e46-b3c1-59bc2fed437e",
        costCenter2Id: "21e37a84-bb7b-4e18-822a-77b83dfd4bfe",
        costCenter3Id: "2da423a7-6c9b-4903-8661-3632e71534c5",
      },
    ],
    paymentMethods: [
      {
        methodId: "225205cf-8820-4334-8ea8-e41697c07b39",
        amount: 206074,
        description: "for busy meanwhile woot whoa how dreamily reboot before",
        reference: "<value>",
        feeAmount: 160633,
        terminalId: "51da2c04-f02a-4bd7-a9bc-b0a94d0143df",
        cardBatchNumber: null,
        cardCouponNumber: "<value>",
        cardInstallmentPlanCode: "<value>",
        cardBrand: "<value>",
        cashSource: null,
      },
    ],
  },
  projectedEffects: {
    inventory: {
      willAffectStock: false,
      warehouseIds: [
        "43fdc256-515c-4d3d-8ef0-3ad40dad8dae",
        "e9f57c69-d86c-451e-9435-4fea0a32ab9c",
      ],
      productLineCount: 238397,
      totalQuantity: 3342.15,
    },
    accounting: {
      willCreateSaleEntry: true,
      willCreatePaymentEntry: true,
    },
    fiscal: {
      invoiceStatus: "pending",
    },
    payments: {
      willCreatePayments: false,
      paymentMethodCount: 127107,
      totalAmount: 2536.61,
      pendingAmount: 8341.79,
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