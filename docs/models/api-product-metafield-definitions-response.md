# ApiProductMetafieldDefinitionsResponse

## Example Usage

```typescript
import { ApiProductMetafieldDefinitionsResponse } from "lapyme/models";

let value: ApiProductMetafieldDefinitionsResponse = {
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
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `data`                                                                                                            | [models.ApiProductMetafieldDefinitionsResponseData](../models/api-product-metafield-definitions-response-data.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `warnings`                                                                                                        | *any*[]                                                                                                           | :heavy_check_mark:                                                                                                | N/A                                                                                                               |