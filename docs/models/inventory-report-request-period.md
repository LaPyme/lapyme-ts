# InventoryReportRequestPeriod

Obligatorio cuando se piden métricas históricas de inventario, métricas derivadas de ventas, métricas de movimientos o la dimensión abc_grade (clasificación ABC por ventas netas del período).

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