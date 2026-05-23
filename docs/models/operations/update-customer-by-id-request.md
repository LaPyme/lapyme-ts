# UpdateCustomerByIdRequest

## Example Usage

```typescript
import { UpdateCustomerByIdRequest } from "lapyme/models/operations";

let value: UpdateCustomerByIdRequest = {
  id: "cust-123e4567",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID único del cliente                                                    | cust-123e4567                                                           |
| `body`                                                                  | [models.CreateCustomerRequest](../../models/create-customer-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |