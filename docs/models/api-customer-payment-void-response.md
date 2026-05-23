# ApiCustomerPaymentVoidResponse

## Example Usage

```typescript
import { ApiCustomerPaymentVoidResponse } from "lapyme/models";

let value: ApiCustomerPaymentVoidResponse = {
  requestId: "<id>",
  data: {
    customerPayment: {
      id: "e81f41c3-81e2-4b60-a26a-7d9f7016c0e3",
      voided: true,
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiCustomerPaymentVoidResponseData](../models/api-customer-payment-void-response-data.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |