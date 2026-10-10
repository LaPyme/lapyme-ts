# Definition

## Example Usage

```typescript
import { Definition } from "lapyme/models";

let value: Definition = {
  key: "<key>",
  name: "<value>",
  description: "reorganisation deck forceful noisily miscalculate scrabble",
  fieldType: "boolean",
  validations: {
    required: true,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `key`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `fieldType`                                                              | [models.ApiSharedEnumf7fe6bfeb0](../models/api-shared-enumf7fe6bfeb0.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `validations`                                                            | [models.Validations](../models/validations.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `values`                                                                 | [models.Value](../models/value.md)[]                                     | :heavy_minus_sign:                                                       | N/A                                                                      |