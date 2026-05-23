# CreateApiSaleResponse

## Example Usage

```typescript
import { CreateApiSaleResponse } from "lapyme/models/operations";

let value: CreateApiSaleResponse = {
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
        roundingAdjustment: 864813,
        balance: 1778.6,
        isFullAmountPending: true,
        items: [
          {
            productId: "e006673b-6b7a-40d8-8190-6929677cdaf6",
            productName: "<value>",
            sku: "<value>",
            warehouseId: "813f17bc-9a75-4f6c-a667-2dd64813da15",
            name: "<value>",
            productType: "kit",
            quantity: 6313.96,
            unitPrice: 389913,
            unitCost: 104823,
            taxRateId: 242458,
            isExempt: true,
            discount: {
              type: "amount",
              value: 2299.32,
            },
            notes: "<value>",
            accountId: "514dae75-282b-411e-a2de-f058a36bb273",
            costCenter1Id: "179ad6fc-b9e4-463c-8159-bc2fed437ee5",
            costCenter2Id: null,
            costCenter3Id: "37a84bb7-be18-422a-b77b-83dfd4bfe362",
          },
        ],
        paymentMethods: [
          {
            methodId: "423a76c9-b903-4661-8363-2e71534c51f2",
            amount: 335436,
            description: "yuck warlike across",
            reference: "<value>",
            feeAmount: 190582,
            terminalId: "03dc4b1f-2838-4ee9-9ec1-c024a570b14f",
            cardBatchNumber: "<value>",
            cardCouponNumber: null,
            cardInstallmentPlanCode: "<value>",
            cardBrand: "<value>",
          },
        ],
      },
      projectedEffects: {
        inventory: {
          willAffectStock: true,
          warehouseIds: [
            "2178e60d-4f5d-4f42-a283-3304bcec3a01",
          ],
          productLineCount: 250522,
          totalQuantity: 1606.33,
        },
        accounting: {
          willCreateSaleEntry: true,
          willCreatePaymentEntry: true,
        },
        fiscal: {
          invoiceStatus: "not_required",
        },
        payments: {
          willCreatePayments: false,
          paymentMethodCount: 664715,
          totalAmount: 1494.96,
          pendingAmount: 7808.37,
        },
      },
      idempotentReplay: true,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [models.ApiSaleTransactionSuccessResponse](../../models/api-sale-transaction-success-response.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |