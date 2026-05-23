# ListApiCustomerPaymentsResponse

## Example Usage

```typescript
import { ListApiCustomerPaymentsResponse } from "lapyme/models/operations";

let value: ListApiCustomerPaymentsResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [
      {
        id: "533bbcdb-5977-4e75-bd97-a2896739c6c0",
        paymentDate: "<value>",
        amount: 222486,
        balance: 873581,
        formattedPaymentNumber: "<value>",
        currency: "PES",
        paymentMethod: {
          id: "aba4ddb3-f142-4a77-aa1a-78e411d96988",
          name: "<value>",
          icon: null,
        },
        paymentMethodCount: 999155,
        relatedEntity: {
          id: "8d325324-c481-41d3-9060-3a7395327437",
          name: "<value>",
          number: "<value>",
          saleId: "a16db801-a12f-4f07-8d28-a8df4ab55228",
        },
        createdBy: {
          id: "45dcd06d-e9c1-4a23-a20c-e9397ac2a786",
          name: "<value>",
        },
        createdAt: new Date("2026-04-16T00:04:05.431Z"),
        createdAtCursor: "<value>",
        updatedAt: new Date("2024-02-20T22:23:46.444Z"),
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://defenseless-wilderness.net",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiCustomerPaymentListResponse](../../models/api-customer-payment-list-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |