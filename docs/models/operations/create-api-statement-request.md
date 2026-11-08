# CreateApiStatementRequest

## Example Usage

```typescript
import { CreateApiStatementRequest } from "lapyme/models/operations";

let value: CreateApiStatementRequest = {
  idempotencyKey: "<value>",
  body: {
    bankAccountId: "c6e0f6e2-6ab2-46f1-b0a6-9fc5ab0f3b06",
    periodStart: new Date("2024-12-02"),
    periodEnd: new Date("2026-08-25"),
    openingBalance: 346126,
    closingBalance: 941214,
    lines: [],
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `body`                                                          | *operations.CreateApiStatementRequestBody*                      | :heavy_check_mark:                                              | N/A                                                             |