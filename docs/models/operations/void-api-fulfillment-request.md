# VoidApiFulfillmentRequest

## Example Usage

```typescript
import { VoidApiFulfillmentRequest } from "lapyme/models/operations";

let value: VoidApiFulfillmentRequest = {
  fulfillmentId: "4d58fca0-8cda-43fd-b34f-979e3ef88ae6",
  body: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `fulfillmentId`                                                                           | *string*                                                                                  | :heavy_check_mark:                                                                        | ID del fulfillment                                                                        |
| `body`                                                                                    | [models.ApiOrderOptionalReasonRequest](../../models/api-order-optional-reason-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |