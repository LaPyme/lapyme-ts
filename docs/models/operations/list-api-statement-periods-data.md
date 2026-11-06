# ListApiStatementPeriodsData

## Example Usage

```typescript
import { ListApiStatementPeriodsData } from "lapyme/models/operations";

let value: ListApiStatementPeriodsData = {
  object: "statement_period",
  bankAccountId: "390f0e82-282b-4b98-98e4-e5d73c66c369",
  statementId: "1e83e104-f6d8-4ce1-b353-bc4498c69d5c",
  periodStart: new Date("2024-12-28"),
  periodEnd: new Date("2024-09-21"),
  currency: "ARS",
  openingBalance: 951209,
  closingBalance: 409187,
  bookBalance: 357515,
  difference: 46573,
  bookBalanceQuality: "derived",
  pendingLineCount: 342536,
  lineCount: 616507,
  status: "without_statement",
  outstandingRecords: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                 | *"statement_period"*                                                                                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `bankAccountId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `statementId`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `periodStart`                                                                                            | [Date](../../types/rfcdate.md)                                                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `periodEnd`                                                                                              | [Date](../../types/rfcdate.md)                                                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `currency`                                                                                               | [models.ApiSharedEnumffb4886f2b](../../models/api-shared-enumffb4886f2b.md)                              | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `openingBalance`                                                                                         | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `closingBalance`                                                                                         | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `bookBalance`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `difference`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `bookBalanceQuality`                                                                                     | [models.ApiSharedEnum714ff181d6](../../models/api-shared-enum714ff181d6.md)                              | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `pendingLineCount`                                                                                       | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `lineCount`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [operations.ListApiStatementPeriodsStatus](../../models/operations/list-api-statement-periods-status.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `outstandingRecords`                                                                                     | [models.ApiSharedObject7687b554ab](../../models/api-shared-object7687b554ab.md)[]                        | :heavy_check_mark:                                                                                       | N/A                                                                                                      |