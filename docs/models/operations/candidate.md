# Candidate

## Example Usage

```typescript
import { Candidate } from "lapyme/models/operations";

let value: Candidate = {
  match: "amount_and_date",
  amount: 820365,
  difference: 995910,
  records: [],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `match`                                                                           | [operations.Match](../../models/operations/match.md)                              | :heavy_check_mark:                                                                | N/A                                                                               |
| `amount`                                                                          | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `difference`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `records`                                                                         | [models.ApiSharedObject7687b554ab](../../models/api-shared-object7687b554ab.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |