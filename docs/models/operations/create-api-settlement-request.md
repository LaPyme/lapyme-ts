# CreateApiSettlementRequest

## Example Usage

```typescript
import { CreateApiSettlementRequest } from "lapyme/models/operations";

let value: CreateApiSettlementRequest = {
  idempotencyKey: "<value>",
  body: {
    bankAccountId: "09319686-369a-44a5-95cf-b5d2169386fa",
    settlementDate: new Date("2026-04-11"),
    items: [],
    deductions: [
      {
        deductionType: "commission",
        amount: 695007,
      },
    ],
    netDepositAmount: 203873,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Clave estable para deduplicar reintentos de la misma operación.                                            |
| `body`                                                                                                     | [operations.CreateApiSettlementRequestBody](../../models/operations/create-api-settlement-request-body.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |