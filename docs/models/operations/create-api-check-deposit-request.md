# CreateApiCheckDepositRequest

## Example Usage

```typescript
import { CreateApiCheckDepositRequest } from "lapyme/models/operations";

let value: CreateApiCheckDepositRequest = {
  idempotencyKey: "<value>",
  body: {
    checkId: "5e9a1c5f-dd64-4820-91bf-a8b70dba00e5",
    bankAccountId: "ff1b8cce-77e4-4e44-b156-d77f488d2ae1",
    depositDate: new Date("2025-09-30"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | Clave estable para deduplicar reintentos de la misma operación.                        |
| `body`                                                                                 | [models.ApicreateCheckDepositRequest](../../models/apicreate-check-deposit-request.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |