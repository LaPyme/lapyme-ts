# ApiMetafieldDefinitionWriteResponse

## Example Usage

```typescript
import { ApiMetafieldDefinitionWriteResponse } from "lapyme/models";

let value: ApiMetafieldDefinitionWriteResponse = {
  requestId: "<id>",
  data: {
    idempotentReplay: false,
  },
  warnings: [],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `data`                                                                                                      | [models.ApiMetafieldDefinitionWriteResponseData](../models/api-metafield-definition-write-response-data.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `warnings`                                                                                                  | *any*[]                                                                                                     | :heavy_check_mark:                                                                                          | N/A                                                                                                         |