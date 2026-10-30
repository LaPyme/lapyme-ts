# UpdateApiProductMetafieldDefinitionRequest

## Example Usage

```typescript
import { UpdateApiProductMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: UpdateApiProductMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  definitionId: "af3fb222-e4aa-4d3f-8028-5422708b421e",
  body: {},
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | Clave estable para deduplicar reintentos de la misma operación.                                       |
| `definitionId`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `body`                                                                                                | [models.ApiMetafieldDefinitionUpdateRequest](../../models/api-metafield-definition-update-request.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |