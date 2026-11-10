# ApiProductMetafieldDefinitionsResponse

## Example Usage

```typescript
import { ApiProductMetafieldDefinitionsResponse } from "lapyme/models";

let value: ApiProductMetafieldDefinitionsResponse = {
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
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `data`                                                                                                            | [models.ApiProductMetafieldDefinitionsResponseData](../models/api-product-metafield-definitions-response-data.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `warnings`                                                                                                        | *any*[]                                                                                                           | :heavy_check_mark:                                                                                                | N/A                                                                                                               |