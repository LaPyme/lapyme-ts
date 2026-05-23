# ApiSupplierListResponse

## Example Usage

```typescript
import { ApiSupplierListResponse } from "lapyme/models";

let value: ApiSupplierListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: false,
  nextCursor: "<value>",
  object: "list",
  url: "https://recent-publication.name/",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiSupplierListResponseData](../models/api-supplier-list-response-data.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `object`                                                                               | [models.ApiSupplierListResponseObject](../models/api-supplier-list-response-object.md) | :heavy_check_mark:                                                                     | List-envelope discriminator.                                                           |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | Requested list path.                                                                   |