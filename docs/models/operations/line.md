# Line

## Example Usage

```typescript
import { Line } from "lapyme/models/operations";

let value: Line = {
  externalId: "<id>",
  date: new Date("2025-01-14"),
  description: "tame like whoa gruesome oof heartbeat",
  amount: 141543,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `externalId`                   | *string*                       | :heavy_check_mark:             | N/A                            |
| `date`                         | [Date](../../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |
| `description`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `amount`                       | *number*                       | :heavy_check_mark:             | N/A                            |
| `reference`                    | *string*                       | :heavy_minus_sign:             | N/A                            |
| `runningBalance`               | *number*                       | :heavy_minus_sign:             | N/A                            |