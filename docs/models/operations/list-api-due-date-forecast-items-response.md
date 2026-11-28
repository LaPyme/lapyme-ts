# ListApiDueDateForecastItemsResponse

## Example Usage

```typescript
import { ListApiDueDateForecastItemsResponse } from "lapyme/models/operations";

let value: ListApiDueDateForecastItemsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    effectiveScope: {
      circuitId: "8abec0cb-e3f6-4226-94ca-2340e2f84285",
      circuitName: "<value>",
    },
    data: [
      {
        object: "due_date_forecast_item",
        sourceType: "<value>",
        sourceId: "ece5330c-c259-470e-92b4-721d9a86b13e",
        journalLineId: "d8b1a91a-afbc-4dd0-a549-b20fa73bafb9",
        installmentPosition: 966740,
        contactId: "1743f7f4-4626-4275-a502-02cffd277d68",
        contactName: "<value>",
        reference: "<value>",
        dueDate: new Date("2024-09-12"),
        functionalAmount: 540753,
        nativeAmount: 873341,
        nativeCurrency: "<value>",
        href: "<value>",
      },
    ],
    object: "list",
    url: "https://colossal-sermon.biz",
    hasMore: false,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                       | Record<string, *string*[]>                                                                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `result`                                                                                                                        | [operations.ListApiDueDateForecastItemsResponseBody](../../models/operations/list-api-due-date-forecast-items-response-body.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |