# DeleteApiCustomerMetafieldDefinitionRequest

## Example Usage

```typescript
import { DeleteApiCustomerMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: DeleteApiCustomerMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  definitionId: "6c7e33b8-497d-43d7-8fc3-05b247939b97",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `definitionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |