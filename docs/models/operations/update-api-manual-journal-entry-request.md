# UpdateApiManualJournalEntryRequest

## Example Usage

```typescript
import { UpdateApiManualJournalEntryRequest } from "lapyme/models/operations";

let value: UpdateApiManualJournalEntryRequest = {
  journalEntryId: "68e7ef7f-24d7-47a5-8612-64dcfcd63e0e",
  idempotencyKey: "<value>",
  body: {
    occurredAt: new Date("2025-10-30"),
    description:
      "mid pertinent longingly tentacle cleverly oof livid except wallop",
    lines: [
      {
        accountId: "94bc162c-cccf-4e9e-b0ca-818062f9dc20",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `journalEntryId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | Clave estable para deduplicar reintentos de la misma operación.                                      |
| `body`                                                                                               | [models.ApiManualJournalEntryUpdateRequest](../../models/api-manual-journal-entry-update-request.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |