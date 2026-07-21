# ApiWebhookEventTypeListResponseData

## Example Usage

```typescript
import { ApiWebhookEventTypeListResponseData } from "lapyme/models";

let value: ApiWebhookEventTypeListResponseData = {
  object: "webhook_event_type_reference",
  code: "order.completed",
  resource: "<value>",
  description: "hmph whenever limply",
  requiredScopes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  apiVersions: [
    "2026-06-29",
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | *"webhook_event_type_reference"*                                           | :heavy_check_mark:                                                         | N/A                                                                        |
| `code`                                                                     | [models.ApiSharedEnum4091526d90](../models/api-shared-enum4091526d90.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `resource`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `requiredScopes`                                                           | *string*[]                                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `apiVersions`                                                              | [models.ApiSharedEnum5f610d8b6a](../models/api-shared-enum5f610d8b6a.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |