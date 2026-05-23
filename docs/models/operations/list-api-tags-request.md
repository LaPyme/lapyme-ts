# ListApiTagsRequest

## Example Usage

```typescript
import { ListApiTagsRequest } from "lapyme/models/operations";

let value: ListApiTagsRequest = {
  scope: "sale",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `scope`                                              | [operations.Scope](../../models/operations/scope.md) | :heavy_check_mark:                                   | Scope del catálogo de etiquetas                      |
| `includeArchived`                                    | *boolean*                                            | :heavy_minus_sign:                                   | Incluye etiquetas archivadas en la respuesta         |