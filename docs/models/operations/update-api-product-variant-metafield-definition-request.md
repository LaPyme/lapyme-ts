# UpdateApiProductVariantMetafieldDefinitionRequest

## Example Usage

```typescript
import { UpdateApiProductVariantMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: UpdateApiProductVariantMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  definitionId: "8c05c33d-9873-4f1d-a18f-ddad8f84e524",
  body: {},
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | Clave estable para deduplicar reintentos de la misma operación.                                       |
| `definitionId`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `body`                                                                                                | [models.ApiMetafieldDefinitionUpdateRequest](../../models/api-metafield-definition-update-request.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |