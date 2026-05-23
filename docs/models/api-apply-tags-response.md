# ApiApplyTagsResponse

## Example Usage

```typescript
import { ApiApplyTagsResponse } from "lapyme/models";

let value: ApiApplyTagsResponse = {
  requestId: "<id>",
  data: {
    entityIds: [
      "a38736f4-eead-4006-8cdc-4e0322b97587",
      "2c4c12cd-f8b7-4910-8f57-1709f92c89d9",
    ],
    added: 413229,
    removed: 252572,
    total: 514930,
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiApplyTagsResponseData](../models/api-apply-tags-response-data.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `warnings`                                                                   | *any*[]                                                                      | :heavy_check_mark:                                                           | N/A                                                                          |