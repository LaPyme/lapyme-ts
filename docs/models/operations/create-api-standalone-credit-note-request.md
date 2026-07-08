# CreateApiStandaloneCreditNoteRequest

## Example Usage

```typescript
import { CreateApiStandaloneCreditNoteRequest } from "lapyme/models/operations";

let value: CreateApiStandaloneCreditNoteRequest = {
  idempotencyKey: "<value>",
  body: {
    customerId: "b0e66ce1-fca7-4d68-9b34-e2ffbc9c70fc",
    voucherType: 53,
    pointOfSaleId: "e148176d-d461-49c7-8d45-c1d45d79ab42",
    issueDate: new Date("2026-06-12"),
    items: [
      {
        name: "<value>",
        quantity: 2095.18,
        unitPrice: 474126,
        taxRateId: 159992,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                 | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Clave estable para deduplicar reintentos de la misma operación.                                                                  |
| `body`                                                                                                                           | [operations.CreateApiStandaloneCreditNoteRequestBody](../../models/operations/create-api-standalone-credit-note-request-body.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |