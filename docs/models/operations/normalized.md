# Normalized

## Example Usage

```typescript
import { Normalized } from "lapyme/models/operations";

let value: Normalized = {
  bankAccountId: "55afbcb5-527d-4343-b582-6c51af34fc5c",
  periodStart: new Date("2026-06-09"),
  periodEnd: new Date("2026-12-16"),
  openingBalance: 274657,
  closingBalance: 349854,
  lines: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `bankAccountId`                                      | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `periodStart`                                        | [Date](../../types/rfcdate.md)                       | :heavy_check_mark:                                   | N/A                                                  |
| `periodEnd`                                          | [Date](../../types/rfcdate.md)                       | :heavy_check_mark:                                   | N/A                                                  |
| `openingBalance`                                     | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `closingBalance`                                     | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `lines`                                              | [operations.Line](../../models/operations/line.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `source`                                             | *"normalized"*                                       | :heavy_minus_sign:                                   | N/A                                                  |