# ApiWebhookEndpointListResponse

## Example Usage

```typescript
import { ApiWebhookEndpointListResponse } from "lapyme/models";

let value: ApiWebhookEndpointListResponse = {
  requestId: "<id>",
  data: [
    {
      object: "webhook_endpoint",
      id: "aa06939c-af72-4555-8826-cbdc4c75b756",
      label: "<value>",
      url: "https://far-off-siege.org/",
      enabledEvents: [],
      apiVersion: "2026-06-29",
      status: "disabled",
      ownerType: "organization",
      failureCount: 338239,
      lastSuccessAt: new Date("2024-01-25T08:23:31.133Z"),
      lastFailureAt: null,
      disabledAt: new Date("2026-09-02T05:11:40.827Z"),
      createdAt: new Date("2024-06-16T17:03:32.746Z"),
      updatedAt: new Date("2026-02-18T17:04:38.242Z"),
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://authentic-secret.net/",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiSharedObject3d3503f39a](../models/api-shared-object3d3503f39a.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `object`                                                                       | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)       | :heavy_check_mark:                                                             | List-envelope discriminator.                                                   |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | Requested list path.                                                           |