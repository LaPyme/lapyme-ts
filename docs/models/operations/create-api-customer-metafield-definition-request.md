# CreateApiCustomerMetafieldDefinitionRequest

## Example Usage

```typescript
import { CreateApiCustomerMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: CreateApiCustomerMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
    fieldType: "number",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | Clave estable para deduplicar reintentos de la misma operación.                                       |
| `body`                                                                                                | [models.ApiMetafieldDefinitionCreateRequest](../../models/api-metafield-definition-create-request.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |