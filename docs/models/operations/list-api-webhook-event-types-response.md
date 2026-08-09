# ListApiWebhookEventTypesResponse

## Example Usage

```typescript
import { ListApiWebhookEventTypesResponse } from "lapyme/models/operations";

let value: ListApiWebhookEventTypesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "webhook_event_type_reference",
        code: "product.created",
        resource: "<value>",
        description:
          "jaggedly for competent instead however alive oof majestic yippee ack",
        requiredScopes: [],
        apiVersions: [],
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://lumpy-habit.com",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [models.ApiWebhookEventTypeListResponse](../../models/api-webhook-event-type-list-response.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |