# DeleteApiProductResponse

## Example Usage

```typescript
import { DeleteApiProductResponse } from "lapyme/models/operations";

let value: DeleteApiProductResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: {
      id: "3fc3064d-be7f-4c50-986b-f7236e108e1f",
      object: "product",
      status: "deleted",
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiProductDeleteResponse](../../models/api-product-delete-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |