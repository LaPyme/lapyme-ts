# ApiSaleTransactionSuccessResponse

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponse } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponse = {
  requestId: "<id>",
  data: {
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
      roundingAdjustment: 221399,
      balance: 7543.67,
      createdAt: new Date("2026-05-15T21:43:44.304Z"),
    },
    normalizedSale: {
      customerId: "76cbb7e7-1d40-41ed-9a48-5a3e5231d6b8",
      customerTaxCategoryOverride: "<value>",
      voucherType: 864550,
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
          provinceId: 438840,
          amount: 290368,
        },
      ],
      municipalPerceptionAmount: 981554,
      internalTributeAmount: 484461,
      uncategorizedVatPerceptionAmount: 174733,
      otherTributeAmount: 454441,
      discountType: "amount",
      discountValue: 1015.29,
      discountAmount: 132497,
      roundingAdjustment: 56147,
      balance: 474.91,
      isFullAmountPending: false,
      items: [],
      paymentMethods: [],
    },
    projectedEffects: {
      inventory: {
        willAffectStock: false,
        warehouseIds: [
          "e006673b-6b7a-40d8-8190-6929677cdaf6",
          "77c813f1-7bc9-4a75-af6c-6672dd64813d",
        ],
        productLineCount: 68286,
        totalQuantity: 3190.65,
      },
      accounting: {
        willCreateSaleEntry: false,
        willCreatePaymentEntry: true,
      },
      fiscal: {
        invoiceStatus: "not_required",
      },
      payments: {
        willCreatePayments: false,
        paymentMethodCount: 631396,
        totalAmount: 3899.13,
        pendingAmount: 5394.58,
      },
    },
    idempotentReplay: true,
  },
  warnings: [],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `data`                                                                                                  | [models.ApiSaleTransactionSuccessResponseData](../models/api-sale-transaction-success-response-data.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `warnings`                                                                                              | [models.ApiSharedObjectc671832641](../models/api-shared-objectc671832641.md)[]                          | :heavy_check_mark:                                                                                      | N/A                                                                                                     |