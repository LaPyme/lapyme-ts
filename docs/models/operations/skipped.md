# Skipped

## Example Usage

```typescript
import { Skipped } from "lapyme/models/operations";

let value: Skipped = {
  statementLineId: "55bac216-f196-4c37-97c8-54269340cb87",
  match: "cheque",
  code: "refused",
  message: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `statementLineId`                                                           | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `match`                                                                     | [models.ApiSharedEnum7fe4c12b9a](../../models/api-shared-enum7fe4c12b9a.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `code`                                                                      | [operations.Code](../../models/operations/code.md)                          | :heavy_check_mark:                                                          | N/A                                                                         |
| `message`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |