# ApiPurchaseTransactionSuccessResponseAccounting

## Example Usage

```typescript
import { ApiPurchaseTransactionSuccessResponseAccounting } from "lapyme/models";

let value: ApiPurchaseTransactionSuccessResponseAccounting = {
  willCreateJournalEntry: false,
  currency: "PES",
  exchangeRate: 9134.5,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `willCreateJournalEntry`                                      | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           |
| `currency`                                                    | [models.AccountingCurrency](../models/accounting-currency.md) | :heavy_check_mark:                                            | N/A                                                           |
| `exchangeRate`                                                | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |