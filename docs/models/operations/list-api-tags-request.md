# ListApiTagsRequest

## Example Usage

```typescript
import { ListApiTagsRequest } from "lapyme/models/operations";

let value: ListApiTagsRequest = {
  scope: "purchase",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `scope`                                                                     | [models.ApiSharedEnum09f8155a9a](../../models/api-shared-enum09f8155a9a.md) | :heavy_check_mark:                                                          | Scope del catálogo de etiquetas                                             |
| `includeArchived`                                                           | *boolean*                                                                   | :heavy_minus_sign:                                                          | Incluye etiquetas archivadas en la respuesta                                |