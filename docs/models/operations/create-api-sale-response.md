# CreateApiSaleResponse

## Example Usage

```typescript
import { CreateApiSaleResponse } from "lapyme/models/operations";

let value: CreateApiSaleResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
            provinceId: 981554,
            amount: 484461,
          },
        ],
        municipalPerceptionAmount: 174733,
        internalTributeAmount: 454441,
        uncategorizedVatPerceptionAmount: 459257,
        otherTributeAmount: 733084,
        discountType: "percentage",
        discountValue: 561.47,
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
      idempotentReplay: true,
    },
    warnings: [
      {
        code: "<value>",
        message: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [models.ApiSaleTransactionSuccessResponse](../../models/api-sale-transaction-success-response.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |