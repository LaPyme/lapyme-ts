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

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `ids`                    | *string*[]               | :heavy_check_mark:       | N/A                      |
| `labels`                 | *string*[]               | :heavy_check_mark:       | N/A                      |
| `measures`               | Record<string, *number*> | :heavy_check_mark:       | N/A                      |