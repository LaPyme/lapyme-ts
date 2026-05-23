# UpdatePaymentMethodByIdRequest

## Example Usage

```typescript
import { UpdatePaymentMethodByIdRequest } from "lapyme/models/operations";

let value: UpdatePaymentMethodByIdRequest = {
  id: "pm-123e4567",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | ID único del método de pago                                                        | pm-123e4567                                                                        |
| `body`                                                                             | [models.CreatePaymentMethodRequest](../../models/create-payment-method-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |