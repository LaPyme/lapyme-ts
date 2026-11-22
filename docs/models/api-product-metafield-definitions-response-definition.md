# ApiProductMetafieldDefinitionsResponseDefinition

## Example Usage

```typescript
import { ApiProductMetafieldDefinitionsResponseDefinition } from "lapyme/models";

let value: ApiProductMetafieldDefinitionsResponseDefinition = {
  id: "bcd5a48e-e7a7-4c9d-b8ab-bb2f1f8a0f8f",
  object: "metafield_definition",
  key: "<key>",
  name: "<value>",
  description: "filter barring because mindless e-mail",
  fieldType: "date",
  validations: {
    required: true,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `object`                                                                     | *"metafield_definition"*                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `key`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `fieldType`                                                                  | [models.ApiSharedEnumf7fe6bfeb0](../models/api-shared-enumf7fe6bfeb0.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `validations`                                                                | [models.ApiSharedObjecta855803bd5](../models/api-shared-objecta855803bd5.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `values`                                                                     | [models.Value](../models/value.md)[]                                         | :heavy_minus_sign:                                                           | N/A                                                                          |