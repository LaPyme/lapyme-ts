# CreateApiProductVariantMetafieldDefinitionResponse

## Example Usage

```typescript
import { CreateApiProductVariantMetafieldDefinitionResponse } from "lapyme/models/operations";

let value: CreateApiProductVariantMetafieldDefinitionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
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