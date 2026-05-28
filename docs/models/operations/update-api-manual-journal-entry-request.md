# UpdateApiManualJournalEntryRequest

## Example Usage

```typescript
import { UpdateApiManualJournalEntryRequest } from "lapyme/models/operations";

let value: UpdateApiManualJournalEntryRequest = {
  journalEntryId: "68e7ef7f-24d7-47a5-8612-64dcfcd63e0e",
  idempotencyKey: "<value>",
  body: {
    occurredAt: new Date("2024-07-20"),
    description: "furthermore slimy worthy uh-huh brr innocent clumsy gadzooks",
    lines: [],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `journalEntryId`                                                                        | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `idempotencyKey`                                                                        | *string*                                                                                | :heavy_check_mark:                                                                      | Clave estable para deduplicar reintentos de la misma operación.                         |
| `body`                                                                                  | [models.ApiManualJournalEntryRequest](../../models/api-manual-journal-entry-request.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |