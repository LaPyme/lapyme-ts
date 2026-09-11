# FieldType

## Example Usage

```typescript
import { FieldType } from "lapyme/models";

let value: FieldType = "date";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"boolean" | "text" | "number" | "date" | "select" | Unrecognized<string>
```