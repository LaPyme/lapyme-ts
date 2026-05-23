# ApiInventoryMovementListResponse

## Example Usage

```typescript
import { ApiInventoryMovementListResponse } from "lapyme/models";

let value: ApiInventoryMovementListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://energetic-sideboard.name/",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `data`                                                                                                    | [models.ApiInventoryMovementListResponseData](../models/api-inventory-movement-list-response-data.md)[]   | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `hasMore`                                                                                                 | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `nextCursor`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `object`                                                                                                  | [models.ApiInventoryMovementListResponseObject](../models/api-inventory-movement-list-response-object.md) | :heavy_check_mark:                                                                                        | List-envelope discriminator.                                                                              |
| `url`                                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Requested list path.                                                                                      |