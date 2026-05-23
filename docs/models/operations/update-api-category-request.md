# UpdateApiCategoryRequest

## Example Usage

```typescript
import { UpdateApiCategoryRequest } from "lapyme/models/operations";

let value: UpdateApiCategoryRequest = {
  categoryId: "3a13cb89-a61e-4790-8abe-1e278f7fec00",
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `categoryId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `idempotencyKey`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.ApiCategoryMutationRequest](../../models/api-category-mutation-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |