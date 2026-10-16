# Row

## Example Usage

```typescript
import { Row } from "lapyme/models";

let value: Row = {
  id: "<id>",
  ids: [
    "<value 1>",
  ],
  labels: [
    "<value 1>",
  ],
  measures: {
    "key": 6036.07,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ids`                                                                                    | *string*[]                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `labels`                                                                                 | *string*[]                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `measures`                                                                               | Record<string, *number*>                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `measureQualities`                                                                       | Record<string, [models.ApiSharedEnum714ff181d6](../models/api-shared-enum714ff181d6.md)> | :heavy_minus_sign:                                                                       | N/A                                                                                      |