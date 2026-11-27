# CreateApiSaleResponse

## Example Usage

```typescript
import { CreateApiSaleResponse } from "lapyme/models/operations";

let value: CreateApiSaleResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: {
      sale: {
        installments: [
          {
            position: 823068,
            dueDate: new Date("2026-11-13"),
            amount: 116105,
            openAmount: 393179,
            settlement: "pending",
            isOverdue: true,
          },
        ],
        nextOpenInstallment: {
          dueDate: new Date("2024-11-19"),
          openAmount: 92845,
        },
        overdueOpenTotal: 770361,
        balanceAboveSchedule: 833156,
        saleId: "794b6740-c2e0-482b-acec-1855cef0d7b4",
        invoicePdf: "<value>",
        customerId: "ded41bc6-dabc-4d4e-b141-fdffaaba418a",
        voucherType: "<value>",
        pointOfSaleId: "ed0c542a-1077-4b22-b4a4-ac1029727eb7",
        invoiceNumber: 828162,
        formattedInvoiceNumber: "<value>",
        invoiceStatus: "issued",
        invoiceDate: new Date("2026-05-15"),
        dueDate: new Date("2024-05-21"),
        currency: "Riel",
        subtotal: 385710,
        taxAmount: 792308,
        total: 736782,
        exemptAmount: 725806,
        nonTaxedAmount: 491567,
        tributesAmount: 917378,
        discountAmount: 487825,
        balance: 770.53,
        createdAt: new Date("2026-06-28T20:27:09.230Z"),
      },
      normalizedSale: {
        customerId: "01eda485-a3e5-4231-bd6b-87fd39ef4b2c",
        customerTaxCategoryOverride: "<value>",
        voucherType: 739580,
        pointOfSaleId: "5ca544e9-cb53-4b0d-8c6c-7ee52b151db6",
        registerId: "a1d76649-87bf-4835-a8ad-2ffc3abb3522",
        operatorId: "6b91c028-2f09-456d-8fcb-42a40ddf0a9e",
        invoiceDate: new Date("2024-01-07"),
        dueDate: new Date("2025-05-02"),
        transferType: "SCA",
        serviceFrom: new Date("2026-10-20"),
        serviceTo: new Date("2026-12-11"),
        currency: "ARS",
        exchangeRate: 4544.41,
        sameCurrencyPayment: true,
        notes: "<value>",
        subtotal: 667959,
        taxAmount: 101529,
        total: 132497,
        exemptAmount: 56147,
        nonTaxedAmount: 47491,
        tributesAmount: 864813,
        nationalPerceptionAmount: 177860,
        grossIncomePerceptionAmount: 128689,
        grossIncomeTaxBreakdown: [
          {
            provinceId: 610428,
            amount: 189017,
          },
        ],
        municipalPerceptionAmount: 630816,
        internalTributeAmount: 930283,
        uncategorizedVatPerceptionAmount: 55753,
        otherTributeAmount: 35208,
        discountType: "percentage",
        discountValue: 2291.94,
        discountAmount: 710164,
        balance: 3766.1,
        isFullAmountPending: false,
        items: [],
        paymentMethods: [
          {
            methodId: "0d819069-2967-47cd-aaf6-277c813f17bc",
            amount: 681430,
            description: "anenst finally finally detective fledgling",
            reference: "<value>",
            feeAmount: 874794,
            terminalId: "e75282b1-1e2d-4ef0-a58a-36bb273a9179",
            cardBatchNumber: "<value>",
            cardCouponNumber: "<value>",
            cardInstallmentPlanCode: "<value>",
            cardBrand: "<value>",
            cashSource: {
              type: "safe",
              id: "e463c159-bc2f-4ed4-937e-e521e37a84bb",
            },
          },
        ],
      },
      projectedEffects: {
        inventory: {
          willAffectStock: false,
          warehouseIds: [
            "1822a77b-83df-4d4b-afe3-62da423a76c9",
            "90366136-32e7-4153-84c5-1f225205cf88",
            "0334ea8e-4169-47c0-a7b3-903dc4b1f283",
          ],
          productLineCount: 905282,
          totalQuantity: 8770.01,
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
          paymentMethodCount: 779716,
          totalAmount: 9.3,
          pendingAmount: 1588.85,
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