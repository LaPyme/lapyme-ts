# InventoryReportRequestPeriod

Obligatorio solo cuando se piden métricas derivadas de ventas: endingInventoryUnits, inventoryUnitsSold, inventoryUnitsSoldPerDay, daysOfInventoryRemaining.

## Example Usage

```typescript
import { InventoryReportRequestPeriod } from "lapyme/models";

let value: InventoryReportRequestPeriod = {
  startDate: new Date("2026-01-01"),
  endDate: new Date("2026-03-31"),
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `startDate`                             | [Date](../types/rfcdate.md)             | :heavy_check_mark:                      | Period start date (YYYY-MM-DD)          | 2026-01-01                              |
| `endDate`                               | [Date](../types/rfcdate.md)             | :heavy_check_mark:                      | Period end date (YYYY-MM-DD, inclusive) | 2026-03-31                              |