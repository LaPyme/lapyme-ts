# UpdateApiCustomerMetafieldDefinitionResponse

## Example Usage

```typescript
import { UpdateApiCustomerMetafieldDefinitionResponse } from "lapyme/models/operations";

let value: UpdateApiCustomerMetafieldDefinitionResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
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