# ListApiWebhookEndpointsResponse

## Example Usage

```typescript
import { ListApiWebhookEndpointsResponse } from "lapyme/models/operations";

let value: ListApiWebhookEndpointsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://homely-poppy.net/",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiWebhookEndpointListResponse](../../models/api-webhook-endpoint-list-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |