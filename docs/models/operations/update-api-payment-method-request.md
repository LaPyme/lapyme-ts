# UpdateApiPaymentMethodRequest

## Example Usage

```typescript
import { UpdateApiPaymentMethodRequest } from "lapyme/models/operations";

let value: UpdateApiPaymentMethodRequest = {
  paymentMethodId: "46e12c67-6ee7-46c4-985e-100e05b9df9d",
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `paymentMethodId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `body`                                                                                        | [models.ApiPaymentMethodMutationRequest](../../models/api-payment-method-mutation-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |