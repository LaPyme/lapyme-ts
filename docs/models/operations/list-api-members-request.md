# ListApiMembersRequest

## Example Usage

```typescript
import { ListApiMembersRequest } from "lapyme/models/operations";

let value: ListApiMembersRequest = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `cursor`                                                        | *string*                                                        | :heavy_minus_sign:                                              | Valor de next_cursor devuelto en la página anterior.            |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `includeInactive`                                               | *boolean*                                                       | :heavy_minus_sign:                                              | Incluye miembros inactivos para consultar registros históricos. |