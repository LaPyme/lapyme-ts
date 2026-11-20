# ListApiChecksResponse

## Example Usage

```typescript
import { ListApiChecksResponse } from "lapyme/models/operations";

let value: ListApiChecksResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://beneficial-catalyst.info",
    data: [
      {
        object: "check",
        id: "14fcc760-7ba6-4bb0-9934-35df1f99e2a5",
        number: "<value>",
        bankName: "<value>",
        issuerName: "<value>",
        amount: 255497,
        currency: "USD",
        issueDate: new Date("2024-06-17"),
        dueDate: null,
        format: "electronic",
        origin: "own",
        status: "returned",
        sourceReceiptId: "87991542-7bce-471f-b800-d1e64b1cbdcc",
        supplierPaymentId: "b0d35a48-839d-4894-b8fb-bb196ec2e957",
        checkDepositId: "d542e8c2-36cb-4c0a-a8bc-2b74933abf5d",
        createdAt: new Date("2024-05-05T10:40:21.798Z"),
        updatedAt: new Date("2025-09-24T01:33:47.268Z"),
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `result`                                                                | [models.ApilistChecksResponse](../../models/apilist-checks-response.md) | :heavy_check_mark:                                                      | N/A                                                                     |