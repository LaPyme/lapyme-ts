# ListApiSupplierPaymentsResponse

## Example Usage

```typescript
import { ListApiSupplierPaymentsResponse } from "lapyme/models/operations";

let value: ListApiSupplierPaymentsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://scaly-skeleton.org",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiSupplierPaymentListResponse](../../models/api-supplier-payment-list-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |