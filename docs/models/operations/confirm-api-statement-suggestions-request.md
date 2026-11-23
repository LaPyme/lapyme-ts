# ConfirmApiStatementSuggestionsRequest

## Example Usage

```typescript
import { ConfirmApiStatementSuggestionsRequest } from "lapyme/models/operations";

let value: ConfirmApiStatementSuggestionsRequest = {
  idempotencyKey: "<value>",
  statementId: "1d9b760e-12f7-41d9-9e4a-d066a718492f",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `statementId`                                                   | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |