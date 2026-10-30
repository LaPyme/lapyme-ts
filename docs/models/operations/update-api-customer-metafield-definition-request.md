# UpdateApiCustomerMetafieldDefinitionRequest

## Example Usage

```typescript
import { UpdateApiCustomerMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: UpdateApiCustomerMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  definitionId: "b3c8b587-5419-4abd-8dde-d6f4a465a690",
  body: {},
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | Clave estable para deduplicar reintentos de la misma operación.                                       |
| `definitionId`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `body`                                                                                                | [models.ApiMetafieldDefinitionUpdateRequest](../../models/api-metafield-definition-update-request.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |