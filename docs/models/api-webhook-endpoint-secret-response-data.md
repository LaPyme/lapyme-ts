# ApiWebhookEndpointSecretResponseData

## Example Usage

```typescript
import { ApiWebhookEndpointSecretResponseData } from "lapyme/models";

let value: ApiWebhookEndpointSecretResponseData = {
  object: "webhook_endpoint",
  id: "72c06df4-21f5-4335-9624-12d5a95a576e",
  label: "<value>",
  url: "https://perfumed-hexagon.biz",
  enabledEvents: [
    "bank_account.created",
  ],
  apiVersion: "2026-06-29",
  status: "paused",
  ownerType: "connected_app",
  failureCount: 307399,
  lastSuccessAt: new Date("2025-09-20T07:10:00.494Z"),
  lastFailureAt: new Date("2025-12-17T12:59:02.954Z"),
  disabledAt: new Date("2026-03-20T21:50:11.452Z"),
  createdAt: new Date("2026-07-10T18:56:05.517Z"),
  updatedAt: new Date("2026-10-11T17:23:02.152Z"),
  signingSecret: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"webhook_endpoint"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabledEvents`                                                                               | [models.ApiSharedEnum1bb83a32a7](../models/api-shared-enum1bb83a32a7.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `apiVersion`                                                                                  | [models.ApiSharedEnum5f610d8b6a](../models/api-shared-enum5f610d8b6a.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnum1c9cda998e](../models/api-shared-enum1c9cda998e.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ownerType`                                                                                   | [models.ApiSharedEnum4b017f6476](../models/api-shared-enum4b017f6476.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `failureCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastSuccessAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastFailureAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `disabledAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `signingSecret`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |