# V2PurchaseCommitResponseAccounting

## Example Usage

```typescript
import { V2PurchaseCommitResponseAccounting } from "lapyme/models";

let value: V2PurchaseCommitResponseAccounting = {
  willCreateJournalEntry: true,
  currency: "PES",
  exchangeRate: 1947.33,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `willCreateJournalEntry`                                                                                          | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `currency`                                                                                                        | [models.V2PurchaseCommitResponseAccountingCurrency](../models/v2-purchase-commit-response-accounting-currency.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `exchangeRate`                                                                                                    | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |