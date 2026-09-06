# ListApiProductMetafieldDefinitionsResponse

## Example Usage

```typescript
import { ListApiProductMetafieldDefinitionsResponse } from "lapyme/models/operations";

let value: ListApiProductMetafieldDefinitionsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      definitions: [
        {
          key: "<key>",
          name: "<value>",
          description: "abaft fooey sediment incidentally aha apud yum",
          fieldType: "date",
          validations: {
            required: true,
          },
        },
      ],
    },
    warnings: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `result`                                                                                                    | [models.ApiProductMetafieldDefinitionsResponse](../../models/api-product-metafield-definitions-response.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |