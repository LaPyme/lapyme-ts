# ListApiCustomerMetafieldDefinitionsResponse

## Example Usage

```typescript
import { ListApiCustomerMetafieldDefinitionsResponse } from "lapyme/models/operations";

let value: ListApiCustomerMetafieldDefinitionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://tricky-basket.net/",
    data: [
      {
        object: "metafield_definition",
        id: "58cc39d8-372c-48e9-933d-427fa041e074",
        key: "<key>",
        name: "<value>",
        description: null,
        fieldType: "date",
        validations: {
          required: true,
        },
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                     | Record<string, *string*[]>                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `result`                                                                                                      | [models.ApiCustomerMetafieldDefinitionsResponse](../../models/api-customer-metafield-definitions-response.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |