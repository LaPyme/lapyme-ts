# ApiPriceListListResponse

## Example Usage

```typescript
import { ApiPriceListListResponse } from "lapyme/models";

let value: ApiPriceListListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://bouncy-suitcase.name",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `requestId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `data`                                                                                    | [models.ApiPriceListListResponseData](../models/api-price-list-list-response-data.md)[]   | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `hasMore`                                                                                 | *boolean*                                                                                 | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `nextCursor`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `object`                                                                                  | [models.ApiPriceListListResponseObject](../models/api-price-list-list-response-object.md) | :heavy_check_mark:                                                                        | List-envelope discriminator.                                                              |
| `url`                                                                                     | *string*                                                                                  | :heavy_check_mark:                                                                        | Requested list path.                                                                      |