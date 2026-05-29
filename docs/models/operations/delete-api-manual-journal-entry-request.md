# DeleteApiManualJournalEntryRequest

## Example Usage

```typescript
import { DeleteApiManualJournalEntryRequest } from "lapyme/models/operations";

let value: DeleteApiManualJournalEntryRequest = {
  journalEntryId: "82f27ebb-ae42-4fff-8f25-949f75c1687d",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `journalEntryId`                                                | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |