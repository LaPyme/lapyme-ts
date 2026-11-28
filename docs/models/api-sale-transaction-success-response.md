# ApiSaleTransactionSuccessResponse

## Example Usage

```typescript
import { ApiSaleTransactionSuccessResponse } from "lapyme/models";

let value: ApiSaleTransactionSuccessResponse = {
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
          provinceId: 630816,
          amount: 930283,
        },
      ],
      municipalPerceptionAmount: 55753,
      internalTributeAmount: 35208,
      uncategorizedVatPerceptionAmount: 410402,
      otherTributeAmount: 382269,
      discountType: "percentage",
      discountValue: 3766.1,
      discountAmount: 741626,
      balance: 4860.25,
      isFullAmountPending: false,
      items: [],
      paymentMethods: [
        {
          methodId: "81906929-677c-4daf-9627-7c813f17bc9a",
          amount: 358274,
          description: "starboard pile outrun up ah mid",
          reference: "<value>",
          feeAmount: 82308,
          terminalId: null,
          cardBatchNumber: "<value>",
          cardCouponNumber: "<value>",
          cardInstallmentPlanCode: "<value>",
          cardBrand: "<value>",
          cashSource: {
            type: "register",
            id: "58a36bb2-73a9-4179-aad6-fcb9e463c159",
          },
        },
      ],
    },
    projectedEffects: {
      inventory: {
        willAffectStock: false,
        warehouseIds: [],
        productLineCount: 973089,
        totalQuantity: 9052.07,
      },
      accounting: {
        willCreateSaleEntry: false,
        willCreatePaymentEntry: true,
      },
      fiscal: {
        invoiceStatus: "not_required",
      },
      payments: {
        willCreatePayments: true,
        paymentMethodCount: 933783,
        totalAmount: 9306.61,
        pendingAmount: 3221.2,
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
| `warnings`                                                                                              | *models.ApiSaleTransactionSuccessResponseWarning2*[]                                                    | :heavy_check_mark:                                                                                      | N/A                                                                                                     |