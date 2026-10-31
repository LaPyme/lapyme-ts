# DeleteApiSaleMetafieldDefinitionRequest

## Example Usage

```typescript
import { DeleteApiSaleMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: DeleteApiSaleMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  definitionId: "8dd092b6-430d-4fb3-b6ee-0d04e1bed6f8",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `definitionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |