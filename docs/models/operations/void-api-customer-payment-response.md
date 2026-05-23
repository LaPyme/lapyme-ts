# VoidApiCustomerPaymentResponse

## Example Usage

```typescript
import { VoidApiCustomerPaymentResponse } from "lapyme/models/operations";

let value: VoidApiCustomerPaymentResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: {
      customerPayment: {
        id: "e81f41c3-81e2-4b60-a26a-7d9f7016c0e3",
        voided: true,
      },
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiCustomerPaymentVoidResponse](../../models/api-customer-payment-void-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |