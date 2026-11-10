# ApiProductMetafieldDefinitionsResponseData

## Example Usage

```typescript
import { ApiProductMetafieldDefinitionsResponseData } from "lapyme/models";

let value: ApiProductMetafieldDefinitionsResponseData = {
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
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `definitions`                                                                                                                   | [models.ApiProductMetafieldDefinitionsResponseDefinition](../models/api-product-metafield-definitions-response-definition.md)[] | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |