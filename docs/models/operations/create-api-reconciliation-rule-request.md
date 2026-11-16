# CreateApiReconciliationRuleRequest

## Example Usage

```typescript
import { CreateApiReconciliationRuleRequest } from "lapyme/models/operations";

let value: CreateApiReconciliationRuleRequest = {
  idempotencyKey: "<value>",
  body: {
    bankAccountId: "10493251-4621-4d99-8676-364425baf597",
    text: "<value>",
    direction: "credit",
    accountId: "6850a63b-b568-4afa-9f6e-b4ac927cb608",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                            | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Clave estable para deduplicar reintentos de la misma operación.                                                             |
| `body`                                                                                                                      | [operations.CreateApiReconciliationRuleRequestBody](../../models/operations/create-api-reconciliation-rule-request-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |