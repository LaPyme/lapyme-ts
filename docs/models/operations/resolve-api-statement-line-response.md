# ResolveApiStatementLineResponse

## Example Usage

```typescript
import { ResolveApiStatementLineResponse } from "lapyme/models/operations";

let value: ResolveApiStatementLineResponse = {
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
  },
  result: {
    requestId: "<id>",
    data: {
      object: "statement_line_resolution",
      statementLineId: "9dbf297c-cfbc-406f-8711-aa58202818a0",
      statementId: "869bdc8b-07f1-4500-984e-9d6b32e07921",
      status: "linked",
      reconciliationId: "5f831b13-c404-4478-a2a2-17d365896e79",
      createdRecordId: "faacebfb-5cee-490d-be16-7bd73deec6f5",
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [operations.ResolveApiStatementLineResponseBody](../../models/operations/resolve-api-statement-line-response-body.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |