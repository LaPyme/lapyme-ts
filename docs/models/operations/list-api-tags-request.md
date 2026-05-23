# ListApiTagsRequest

## Example Usage

```typescript
import { ListApiTagsRequest } from "lapyme/models/operations";

let value: ListApiTagsRequest = {
  scope: "sale",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `scope`                                                                     | [models.ApiSharedEnuma1951b6358](../../models/api-shared-enuma1951b6358.md) | :heavy_check_mark:                                                          | Scope del catálogo de etiquetas                                             |
| `includeArchived`                                                           | *boolean*                                                                   | :heavy_minus_sign:                                                          | Incluye etiquetas archivadas en la respuesta                                |