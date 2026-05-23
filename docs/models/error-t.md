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

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `type`                                                              | [models.ApiErrorEnvelopeType](../models/api-error-envelope-type.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `code`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `message`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retryable`                                                         | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 |
| `details`                                                           | [models.Detail](../models/detail.md)[]                              | :heavy_check_mark:                                                  | N/A                                                                 |