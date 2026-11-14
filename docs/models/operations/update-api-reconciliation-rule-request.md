# UpdateApiReconciliationRuleRequest

## Example Usage

```typescript
import { UpdateApiReconciliationRuleRequest } from "lapyme/models/operations";

let value: UpdateApiReconciliationRuleRequest = {
  idempotencyKey: "<value>",
  reconciliationRuleId: "b3375c46-7c7a-4cf8-8313-c52aa9ad4b0a",
  body: {},
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                            | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Clave estable para deduplicar reintentos de la misma operación.                                                             |
| `reconciliationRuleId`                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `body`                                                                                                                      | [operations.UpdateApiReconciliationRuleRequestBody](../../models/operations/update-api-reconciliation-rule-request-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |