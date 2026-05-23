# CreateCategoryRequest

## Example Usage

```typescript
import { CreateCategoryRequest } from "lapyme/models";

let value: CreateCategoryRequest = {
  name: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `name`                              | *string*                            | :heavy_check_mark:                  | Nombre de la categoría              |
| `parentId`                          | *string*                            | :heavy_minus_sign:                  | ID de la categoría padre (opcional) |