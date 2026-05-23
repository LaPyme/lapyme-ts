# PatchApiSaleMetadataResponse

## Example Usage

```typescript
import { PatchApiSaleMetadataResponse } from "lapyme/models/operations";

let value: PatchApiSaleMetadataResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.ApiSaleDetailResponse](../../models/api-sale-detail-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |