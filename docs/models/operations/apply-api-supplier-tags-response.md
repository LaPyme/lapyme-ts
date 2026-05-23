# ApplyApiSupplierTagsResponse

## Example Usage

```typescript
import { ApplyApiSupplierTagsResponse } from "lapyme/models/operations";

let value: ApplyApiSupplierTagsResponse = {
  headers: {},
  result: {
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
    warnings: [],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [models.ApiApplyTagsResponse](../../models/api-apply-tags-response.md) | :heavy_check_mark:                                                     | N/A                                                                    |