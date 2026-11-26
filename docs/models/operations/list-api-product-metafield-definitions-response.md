# ListApiProductMetafieldDefinitionsResponse

## Example Usage

```typescript
import { ListApiProductMetafieldDefinitionsResponse } from "lapyme/models/operations";

let value: ListApiProductMetafieldDefinitionsResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: {
      definitions: [
        {
          id: "2834e3c6-0472-41fc-83c6-9694c0df72e5",
          object: "metafield_definition",
          key: "<key>",
          name: "<value>",
          description: "among metabolise that represent massive",
          fieldType: "number",
          validations: {
            required: true,
          },
        },
      ],
    },
    warnings: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `result`                                                                                                    | [models.ApiProductMetafieldDefinitionsResponse](../../models/api-product-metafield-definitions-response.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |