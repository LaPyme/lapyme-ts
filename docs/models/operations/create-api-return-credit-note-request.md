# CreateApiReturnCreditNoteRequest

## Example Usage

```typescript
import { CreateApiReturnCreditNoteRequest } from "lapyme/models/operations";

let value: CreateApiReturnCreditNoteRequest = {
  saleId: "64a76368-91d7-4c0b-b0b8-788503817ca5",
  idempotencyKey: "<value>",
  body: {
    items: [
      {
        saleItemId: "90f79ad9-81d5-4b05-83f7-e70628e0bdcc",
        quantity: 4283.17,
        unitPrice: 410655,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `saleId`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ID de la venta original                                                                                                  |
| `idempotencyKey`                                                                                                         | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Clave estable para deduplicar reintentos de la misma operación.                                                          |
| `body`                                                                                                                   | [operations.CreateApiReturnCreditNoteRequestBody](../../models/operations/create-api-return-credit-note-request-body.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |