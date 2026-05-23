# CreateApiCategoryRequest

## Example Usage

```typescript
import { CreateApiCategoryRequest } from "lapyme/models/operations";

let value: CreateApiCategoryRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.ApiCategoryMutationRequest](../../models/api-category-mutation-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |