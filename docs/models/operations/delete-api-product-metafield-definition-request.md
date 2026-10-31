# DeleteApiProductMetafieldDefinitionRequest

## Example Usage

```typescript
import { DeleteApiProductMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: DeleteApiProductMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  definitionId: "22ee073c-f1d4-4266-ac1c-2b2ec9356ed5",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `definitionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |