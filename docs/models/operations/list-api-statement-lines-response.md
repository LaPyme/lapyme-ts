# ListApiStatementLinesResponse

## Example Usage

```typescript
import { ListApiStatementLinesResponse } from "lapyme/models/operations";

let value: ListApiStatementLinesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "statement_line",
        id: "3956d440-90fd-4f48-9061-1d314e286a64",
        statementId: "ccb1f5aa-41c0-4d22-a49e-b22944f40444",
        bankAccountId: "901c0e3b-dff3-4329-8219-28fb6dfd1391",
        externalId: "<id>",
        occurredAt: new Date("2024-07-07"),
        description:
          "tiny chairperson apropos worthwhile calmly zowie versus zowie meh",
        reference: "<value>",
        amount: 719001,
        runningBalance: 96950,
        parentLineId: "025e41c5-c358-46fc-9ebe-f9cfa6682b0a",
        attachedLineIds: [
          "0d4a7506-f13d-4895-8b23-d80219d73ce6",
          "c60230e0-cfd2-4da5-a012-59842379d128",
        ],
        groupAmount: 676742,
        status: "pending",
        reconciliationId: null,
        candidates: [
          {
            match: "amount_and_date",
            amount: 700000,
            difference: 837387,
            records: [],
          },
        ],
      },
    ],
    object: "list",
    url: "https://far-midwife.name",
    hasMore: true,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [operations.ListApiStatementLinesResponseBody](../../models/operations/list-api-statement-lines-response-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |