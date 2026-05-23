# UpdateCategoryByIdRequest

## Example Usage

```typescript
import { UpdateCategoryByIdRequest } from "lapyme/models/operations";

let value: UpdateCategoryByIdRequest = {
  id: "cat-123e4567",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID único de la categoría                                                | cat-123e4567                                                            |
| `body`                                                                  | [models.CreateCategoryRequest](../../models/create-category-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |