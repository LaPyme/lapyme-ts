# TargetJournalEntry

## Example Usage

```typescript
import { TargetJournalEntry } from "lapyme/models/operations";

let value: TargetJournalEntry = {
  type: "journal_entry",
  journalEntryId: "bbc05a57-276b-4faa-b91c-059df730dc6d",
  amount: 245192,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"journal_entry"*  | :heavy_check_mark: | N/A                |
| `journalEntryId`   | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |