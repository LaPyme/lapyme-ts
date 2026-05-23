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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiSharedObject16ba66a421](../models/api-shared-object16ba66a421.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `object`                                                                       | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)       | :heavy_check_mark:                                                             | List-envelope discriminator.                                                   |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | Requested list path.                                                           |