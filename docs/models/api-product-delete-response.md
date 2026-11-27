# ApiProductDeleteResponse

## Example Usage

```typescript
import { ApiProductDeleteResponse } from "lapyme/models";

let value: ApiProductDeleteResponse = {
  requestId: "<id>",
  data: {
    id: "3fc3064d-be7f-4c50-986b-f7236e108e1f",
    object: "product",
    status: "deleted",
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.ApiProductDeleteResponseData](../models/api-product-delete-response-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `warnings`                                                                           | *any*[]                                                                              | :heavy_check_mark:                                                                   | N/A                                                                                  |