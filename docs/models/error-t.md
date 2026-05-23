# ErrorT

## Example Usage

```typescript
import { ErrorT } from "lapyme/models";

let value: ErrorT = {
  code: "<value>",
  message: "<value>",
  retryable: true,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `code`                                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `message`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `retryable`                            | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
| `details`                              | [models.Detail](../models/detail.md)[] | :heavy_minus_sign:                     | N/A                                    |