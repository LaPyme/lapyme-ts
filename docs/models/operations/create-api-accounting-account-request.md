# CreateApiAccountingAccountRequest

## Example Usage

```typescript
import { CreateApiAccountingAccountRequest } from "lapyme/models/operations";

let value: CreateApiAccountingAccountRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
    type: "expense",
    parentId: "b551c3ea-74eb-4f7f-a089-34638285ee26",
    isPostable: true,
    isActive: false,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | Clave estable para deduplicar reintentos de la misma operación.                                   |
| `body`                                                                                            | [models.ApiAccountingAccountCreateRequest](../../models/api-accounting-account-create-request.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |