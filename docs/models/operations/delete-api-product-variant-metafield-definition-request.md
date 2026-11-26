# DeleteApiProductVariantMetafieldDefinitionRequest

## Example Usage

```typescript
import { DeleteApiProductVariantMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: DeleteApiProductVariantMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  definitionId: "6baaf389-0415-441e-b2fb-1626ed371b24",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `definitionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |