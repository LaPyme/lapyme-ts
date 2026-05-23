# ApiOrderFulfillmentRequest

## Example Usage

```typescript
import { ApiOrderFulfillmentRequest } from "lapyme/models";

let value: ApiOrderFulfillmentRequest = {
  fulfillmentOrderId: "59d567cf-eba7-4133-b38d-a26857705804",
  lines: [
    {
      fulfillmentOrderLineId: "5935e60a-fdee-4404-9a01-2b6fd9411f2a",
      quantity: 865702,
    },
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `fulfillmentOrderId`                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `deliveryMethod`                                                                                              | [models.ApiOrderFulfillmentRequestDeliveryMethod](../models/api-order-fulfillment-request-delivery-method.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `fulfilledAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `transportName`                                                                                               | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `notes`                                                                                                       | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `lines`                                                                                                       | [models.ApiOrderFulfillmentRequestLine](../models/api-order-fulfillment-request-line.md)[]                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |