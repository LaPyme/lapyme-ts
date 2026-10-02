# UpdateApiAccountingAccountRequest

## Example Usage

```typescript
import { UpdateApiAccountingAccountRequest } from "lapyme/models/operations";

let value: UpdateApiAccountingAccountRequest = {
  accountId: "f0b6e0e0-0a92-4272-b1e9-384ca6c31a9e",
  idempotencyKey: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `accountId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `idempotencyKey`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | Clave estable para deduplicar reintentos de la misma operación.                                 |
| `body`                                                                                          | [models.ApiAccountingAccountPatchRequest](../../models/api-accounting-account-patch-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |