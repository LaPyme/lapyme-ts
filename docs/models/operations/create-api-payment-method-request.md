# CreateApiPaymentMethodRequest

## Example Usage

```typescript
import { CreateApiPaymentMethodRequest } from "lapyme/models/operations";

let value: CreateApiPaymentMethodRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `body`                                                                                        | [models.ApiPaymentMethodMutationRequest](../../models/api-payment-method-mutation-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |