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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `object`                                                                       | *"list"*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiSharedObjectd7e4c12cd9](../models/api-shared-objectd7e4c12cd9.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |