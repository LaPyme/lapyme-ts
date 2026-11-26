# UpdateApiSaleMetafieldDefinitionRequest

## Example Usage

```typescript
import { UpdateApiSaleMetafieldDefinitionRequest } from "lapyme/models/operations";

let value: UpdateApiSaleMetafieldDefinitionRequest = {
  idempotencyKey: "<value>",
  definitionId: "bc84d18d-9201-427a-9373-7580d6f4b097",
  body: {},
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | Clave estable para deduplicar reintentos de la misma operación.                                       |
| `definitionId`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `body`                                                                                                | [models.ApiMetafieldDefinitionUpdateRequest](../../models/api-metafield-definition-update-request.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |