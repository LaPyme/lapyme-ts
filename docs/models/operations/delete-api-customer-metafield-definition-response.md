# DeleteApiCustomerMetafieldDefinitionResponse

## Example Usage

```typescript
import { DeleteApiCustomerMetafieldDefinitionResponse } from "lapyme/models/operations";

let value: DeleteApiCustomerMetafieldDefinitionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      idempotentReplay: false,
    },
    warnings: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `headers`                                                                                             | Record<string, *string*[]>                                                                            | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `result`                                                                                              | [models.ApiMetafieldDefinitionWriteResponse](../../models/api-metafield-definition-write-response.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |