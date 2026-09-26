# DeactivateApiAccountingAccountRequest

## Example Usage

```typescript
import { DeactivateApiAccountingAccountRequest } from "lapyme/models/operations";

let value: DeactivateApiAccountingAccountRequest = {
  accountId: "e20509b7-7924-4256-a135-d988738bf4d6",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `accountId`                                                     | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |