# ReportPeriod

## Example Usage

```typescript
import { ReportPeriod } from "lapyme/models";

let value: ReportPeriod = {
  startDate: new Date("2026-01-01"),
  endDate: new Date("2026-03-31"),
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `startDate`                                      | [Date](../types/rfcdate.md)                      | :heavy_check_mark:                               | Fecha de inicio del período (YYYY-MM-DD)         | 2026-01-01                                       |
| `endDate`                                        | [Date](../types/rfcdate.md)                      | :heavy_check_mark:                               | Fecha de fin del período (YYYY-MM-DD, inclusive) | 2026-03-31                                       |