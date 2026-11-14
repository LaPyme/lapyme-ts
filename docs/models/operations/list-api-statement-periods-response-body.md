# ListApiStatementPeriodsResponseBody

Treasury result or immutable replay

## Example Usage

```typescript
import { ListApiStatementPeriodsResponseBody } from "lapyme/models/operations";

let value: ListApiStatementPeriodsResponseBody = {
  requestId: "<id>",
  data: [
    {
      object: "statement_period",
      bankAccountId: "a41bb067-3529-4216-80e9-02fea4a60c11",
      statementId: "76b4561f-728c-4a8e-97e7-30253f6b28f0",
      periodStart: new Date("2026-09-04"),
      periodEnd: new Date("2026-12-16"),
      currency: "USD",
      openingBalance: 953621,
      closingBalance: 300207,
      bookBalance: 203210,
      difference: 199032,
      bookBalanceQuality: "exact",
      pendingLineCount: 608405,
      lineCount: 708570,
      status: "without_statement",
      outstandingRecords: [],
    },
  ],
  object: "list",
  url: "https://boring-simple.com",
  hasMore: false,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [operations.ListApiStatementPeriodsData](../../models/operations/list-api-statement-periods-data.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `object`                                                                                               | *"list"*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hasMore`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `nextCursor`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |