# ListApiSettlementsResponse

## Example Usage

```typescript
import { ListApiSettlementsResponse } from "lapyme/models/operations";

let value: ListApiSettlementsResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [
      {
        object: "settlement",
        id: "90a0ada0-3d48-4086-b99c-18e666ff11aa",
        bankAccountId: "b0d80176-6ea3-47ed-850b-b7a50212bef7",
        settlementDate: new Date("2026-09-06"),
        status: "<value>",
        grossAmount: 860534,
        deductionsAmount: 275699,
        netAmount: 518130,
        createdAt: new Date("2026-09-15T00:37:32.619Z"),
      },
    ],
    object: "list",
    url: "https://homely-making.biz/",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [operations.ListApiSettlementsResponseBody](../../models/operations/list-api-settlements-response-body.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |