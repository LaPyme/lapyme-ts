# ResolveApiStatementLineRequest

## Example Usage

```typescript
import { ResolveApiStatementLineRequest } from "lapyme/models/operations";

let value: ResolveApiStatementLineRequest = {
  idempotencyKey: "<value>",
  statementLineId: "925c5ea2-495c-4f09-9a97-5ce789976a74",
  body: {
    action: "exclude",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `statementLineId`                                               | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | *operations.ResolveApiStatementLineRequestBody*                 | :heavy_check_mark:                                              | N/A                                                             |