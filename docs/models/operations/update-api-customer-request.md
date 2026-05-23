# UpdateApiCustomerRequest

## Example Usage

```typescript
import { UpdateApiCustomerRequest } from "lapyme/models/operations";

let value: UpdateApiCustomerRequest = {
  customerId: "5de1b7e5-d671-4058-b719-143b7393a6c6",
  body: {},
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `customerId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | ID del cliente                                                                      |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiCustomerUpdateRequest](../../models/api-customer-update-request.md)      | :heavy_check_mark:                                                                  | N/A                                                                                 |