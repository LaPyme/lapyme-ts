# SendApiSaleResponse

## Example Usage

```typescript
import { SendApiSaleResponse } from "lapyme/models/operations";

let value: SendApiSaleResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "sale_delivery",
      saleId: "2ccace5a-db57-4707-b435-7a9f735cc14c",
      recipientEmail: "Dawson_Hoppe@yahoo.com",
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [operations.SendApiSaleResponseBody](../../models/operations/send-api-sale-response-body.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |