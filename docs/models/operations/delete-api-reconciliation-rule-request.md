# DeleteApiReconciliationRuleRequest

## Example Usage

```typescript
import { DeleteApiReconciliationRuleRequest } from "lapyme/models/operations";

let value: DeleteApiReconciliationRuleRequest = {
  idempotencyKey: "<value>",
  reconciliationRuleId: "79fc4f6f-89ad-475d-94e8-25fab0774a74",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `reconciliationRuleId`                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |