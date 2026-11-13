# Undo

## Example Usage

```typescript
import { Undo } from "lapyme/models/operations";

let value: Undo = {
  action: "undo",
  reason: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `action`           | *"undo"*           | :heavy_check_mark: | N/A                |
| `reason`           | *string*           | :heavy_check_mark: | N/A                |