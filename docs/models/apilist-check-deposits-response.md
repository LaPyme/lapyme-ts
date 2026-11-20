# ApilistCheckDepositsResponse

## Example Usage

```typescript
import { ApilistCheckDepositsResponse } from "lapyme/models";

let value: ApilistCheckDepositsResponse = {
  requestId: "<id>",
  object: "list",
  url: "https://grimy-papa.com",
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
| `data`                                                                         | [models.ApiSharedObjecteae97d4da5](../models/api-shared-objecteae97d4da5.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |