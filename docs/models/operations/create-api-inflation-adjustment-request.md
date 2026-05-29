# CreateApiInflationAdjustmentRequest

## Example Usage

```typescript
import { CreateApiInflationAdjustmentRequest } from "lapyme/models/operations";

let value: CreateApiInflationAdjustmentRequest = {
  idempotencyKey: "<value>",
  body: {
    occurredAt: new Date("2026-08-04"),
    lines: [],
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | Clave estable para deduplicar reintentos de la misma operación.                                       |
| `body`                                                                                                | [models.ApiInflationAdjustmentCreateRequest](../../models/api-inflation-adjustment-create-request.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |