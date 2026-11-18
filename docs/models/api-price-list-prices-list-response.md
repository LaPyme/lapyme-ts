# ApiPriceListPricesListResponse

## Example Usage

```typescript
import { ApiPriceListPricesListResponse } from "lapyme/models";

let value: ApiPriceListPricesListResponse = {
  requestId: "<id>",
  object: "list",
  url: "https://writhing-heroine.name",
  data: [],
  pricingRevision: "<value>",
  hasMore: false,
  nextCursor: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `requestId`                                   | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `object`                                      | *"list"*                                      | :heavy_check_mark:                            | N/A                                           |
| `url`                                         | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `data`                                        | *models.ApiPriceListPricesListResponseData*[] | :heavy_check_mark:                            | N/A                                           |
| `pricingRevision`                             | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `hasMore`                                     | *boolean*                                     | :heavy_check_mark:                            | N/A                                           |
| `nextCursor`                                  | *string*                                      | :heavy_check_mark:                            | N/A                                           |