# ApiPriceListDeleteResponse

## Example Usage

```typescript
import { ApiPriceListDeleteResponse } from "lapyme/models";

let value: ApiPriceListDeleteResponse = {
  requestId: "<id>",
  data: {
    priceListId: "cd709ac7-86c8-499c-bf3d-90d6120d9307",
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `requestId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `data`                                                                                    | [models.ApiPriceListDeleteResponseData](../models/api-price-list-delete-response-data.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `warnings`                                                                                | *any*[]                                                                                   | :heavy_check_mark:                                                                        | N/A                                                                                       |