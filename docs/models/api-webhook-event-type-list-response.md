# ApiWebhookEventTypeListResponse

## Example Usage

```typescript
import { ApiWebhookEventTypeListResponse } from "lapyme/models";

let value: ApiWebhookEventTypeListResponse = {
  requestId: "<id>",
  data: [
    {
      object: "webhook_event_type_reference",
      code: "order.fulfilled",
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
  url: "https://snarling-plain.org",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [models.ApiWebhookEventTypeListResponseData](../models/api-webhook-event-type-list-response-data.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hasMore`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `nextCursor`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `object`                                                                                               | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)                               | :heavy_check_mark:                                                                                     | List-envelope discriminator.                                                                           |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | Requested list path.                                                                                   |