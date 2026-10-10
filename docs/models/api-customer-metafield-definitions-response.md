# ApiCustomerMetafieldDefinitionsResponse

## Example Usage

```typescript
import { ApiCustomerMetafieldDefinitionsResponse } from "lapyme/models";

let value: ApiCustomerMetafieldDefinitionsResponse = {
  requestId: "<id>",
  object: "list",
  url: "https://wonderful-address.name/",
  data: [],
  hasMore: false,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `object`                                                                                                              | *"list"*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `url`                                                                                                                 | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `data`                                                                                                                | [models.ApiCustomerMetafieldDefinitionsResponseData](../models/api-customer-metafield-definitions-response-data.md)[] | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `hasMore`                                                                                                             | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `nextCursor`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |