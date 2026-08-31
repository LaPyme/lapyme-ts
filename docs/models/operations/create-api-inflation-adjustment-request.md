# CreateApiInflationAdjustmentRequest

## Example Usage

```typescript
import { CreateApiInflationAdjustmentRequest } from "lapyme/models/operations";

let value: CreateApiInflationAdjustmentRequest = {
  idempotencyKey: "<value>",
  body: {
    periodStart: new Date("2026-08-04"),
    closingDate: new Date("2025-03-17"),
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | Clave estable para deduplicar reintentos de la misma operación.                                       |
| `body`                                                                                                | [models.ApiInflationAdjustmentCreateRequest](../../models/api-inflation-adjustment-create-request.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |