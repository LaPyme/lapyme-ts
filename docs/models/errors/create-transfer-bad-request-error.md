# CreateTransferBadRequestError

Error de validación o lógica de negocio

## Example Usage

```typescript
import { CreateTransferBadRequestError } from "lapyme/models/errors";

// No examples available for this model
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `success`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      | false                                                    |
| `error`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | Las ubicaciones de origen y destino deben ser diferentes |
| `code`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | SAME_WAREHOUSE_ERROR                                     |