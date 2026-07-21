# ApiWebhookEndpointCreateRequest

## Example Usage

```typescript
import { ApiWebhookEndpointCreateRequest } from "lapyme/models";

let value: ApiWebhookEndpointCreateRequest = {
  label: "<value>",
  url: "https://impressionable-eyeliner.biz/",
  enabledEvents: [
    "order.updated",
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `label`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `url`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `enabledEvents`                                                            | [models.ApiSharedEnum4091526d90](../models/api-shared-enum4091526d90.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `apiVersion`                                                               | [models.ApiSharedEnum5f610d8b6a](../models/api-shared-enum5f610d8b6a.md)   | :heavy_minus_sign:                                                         | N/A                                                                        |