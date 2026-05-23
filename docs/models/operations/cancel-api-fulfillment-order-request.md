# CancelApiFulfillmentOrderRequest

## Example Usage

```typescript
import { CancelApiFulfillmentOrderRequest } from "lapyme/models/operations";

let value: CancelApiFulfillmentOrderRequest = {
  fulfillmentOrderId: "bdc333eb-1bba-4eb5-a66e-0456cf5c1ecb",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `fulfillmentOrderId`                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | ID de la orden de preparación                                                             |
| `body`                                                                                    | [models.ApiOrderOptionalReasonRequest](../../models/api-order-optional-reason-request.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |