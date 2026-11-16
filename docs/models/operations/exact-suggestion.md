# ExactSuggestion

## Example Usage

```typescript
import { ExactSuggestion } from "lapyme/models/operations";

let value: ExactSuggestion = {
  match: "exact_reference",
  amount: 874498,
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
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `match`                                                                           | [models.ApiSharedEnum7fe4c12b9a](../../models/api-shared-enum7fe4c12b9a.md)       | :heavy_check_mark:                                                                | N/A                                                                               |
| `amount`                                                                          | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `records`                                                                         | [models.ApiSharedObject7687b554ab](../../models/api-shared-object7687b554ab.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |
| `document`                                                                        | [operations.Document](../../models/operations/document.md)                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `counterpartLine`                                                                 | [operations.CounterpartLine](../../models/operations/counterpart-line.md)         | :heavy_check_mark:                                                                | N/A                                                                               |