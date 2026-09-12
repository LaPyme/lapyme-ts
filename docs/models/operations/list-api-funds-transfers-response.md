# ListApiFundsTransfersResponse

## Example Usage

```typescript
import { ListApiFundsTransfersResponse } from "lapyme/models/operations";

let value: ListApiFundsTransfersResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://acidic-developing.name",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `result`                                                                                | [models.ApiFundsTransferListResponse](../../models/api-funds-transfer-list-response.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |