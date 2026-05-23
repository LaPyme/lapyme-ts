# ErrorT

## Example Usage

```typescript
import { ErrorT } from "lapyme/models";

let value: ErrorT = {
  type: "api_error",
  code: "<value>",
  message: "<value>",
  retryable: false,
  details: [
    {
      code: "<value>",
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.Type](../models/type.md)                                               | :heavy_check_mark:                                                             | N/A                                                                            |
| `code`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `retryable`                                                                    | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `details`                                                                      | [models.ApiSharedObjectc671832641](../models/api-shared-objectc671832641.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |