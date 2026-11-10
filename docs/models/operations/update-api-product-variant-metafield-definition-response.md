# UpdateApiProductVariantMetafieldDefinitionResponse

## Example Usage

```typescript
import { UpdateApiProductVariantMetafieldDefinitionResponse } from "lapyme/models/operations";

let value: UpdateApiProductVariantMetafieldDefinitionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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