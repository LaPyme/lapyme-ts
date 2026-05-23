# ApiTagCreateRequest

## Example Usage

```typescript
import { ApiTagCreateRequest } from "lapyme/models";

let value: ApiTagCreateRequest = {
  scope: "product",
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `scope`                                                                      | [models.ApiTagCreateRequestScope](../models/api-tag-create-request-scope.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `color`                                                                      | [models.ApiTagCreateRequestColor](../models/api-tag-create-request-color.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |