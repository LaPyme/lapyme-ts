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
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
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
        resolutionSource: "own_accounts",
        resolutionReason: "<value>",
        ruleId: "6f49858b-f06e-4403-ab8c-c6f784815f4a",
        candidates: [
          {
            match: "exact_reference",
            amount: 277273,
            difference: 645713,
            records: [
              {
                targetType: "journal_entry",
                targetId: "28d8ffba-8b75-4d52-8ee8-12fbc33942bf",
                occurredAt: new Date("2025-04-01"),
                amount: 117676,
                reference: "<value>",
                description: "though carouse before howl at",
              },
            ],
          },
        ],
        exactSuggestion: {
          match: "contact_document",
          amount: 796644,
          records: [],
          document: {
            type: "purchase",
            documentId: "c87a40fe-d25a-462c-9071-3eca1b65827a",
            contactId: "d4f88e80-3949-4ffc-8efb-adc3aed7b89e",
            amount: 617760,
          },
          counterpartLine: {
            statementLineId: "225dd3f5-ba49-49b5-b2a4-0b66cc2c9172",
            bankAccountId: "4afedacc-1e69-4e67-a9e9-ac48c73dbfcb",
          },
        },
      },
    ],
    object: "list",
    url: "https://forceful-metal.net",
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