# UpdateApiCheckRequest

## Example Usage

```typescript
import { UpdateApiCheckRequest } from "lapyme/models/operations";

let value: UpdateApiCheckRequest = {
  checkId: "59bdfd2a-6c26-467b-9463-d17aab97c38b",
  idempotencyKey: "<value>",
  body: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `checkId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `idempotencyKey`                                                        | *string*                                                                | :heavy_check_mark:                                                      | Clave estable para deduplicar reintentos de la misma operación.         |
| `body`                                                                  | [models.ApiupdateCheckRequest](../../models/apiupdate-check-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |