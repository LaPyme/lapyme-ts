# CreateApiCustomerRequest

## Example Usage

```typescript
import { CreateApiCustomerRequest } from "lapyme/models/operations";

let value: CreateApiCustomerRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | Clave única para evitar duplicados al reintentar la misma creación de cliente.      |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiCustomerMutationRequest](../../models/api-customer-mutation-request.md)  | :heavy_check_mark:                                                                  | N/A                                                                                 |