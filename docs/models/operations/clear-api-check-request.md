# ClearApiCheckRequest

## Example Usage

```typescript
import { ClearApiCheckRequest } from "lapyme/models/operations";

let value: ClearApiCheckRequest = {
  checkId: "dbdddaf7-40ff-40c3-8f7d-830fa33cc6ac",
  idempotencyKey: "<value>",
  body: {
    clearedAt: new Date("2024-07-28"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `checkId`                                                             | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `idempotencyKey`                                                      | *string*                                                              | :heavy_check_mark:                                                    | Clave estable para deduplicar reintentos de la misma operación.       |
| `body`                                                                | [models.ApiclearCheckRequest](../../models/apiclear-check-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |