# CreateApiManualJournalEntryRequest

## Example Usage

```typescript
import { CreateApiManualJournalEntryRequest } from "lapyme/models/operations";

let value: CreateApiManualJournalEntryRequest = {
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
| `idempotencyKey`                                                                        | *string*                                                                                | :heavy_check_mark:                                                                      | Clave estable para deduplicar reintentos de la misma operación.                         |
| `body`                                                                                  | [models.ApiManualJournalEntryRequest](../../models/api-manual-journal-entry-request.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |