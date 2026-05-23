# SourceEnum

## Example Usage

```typescript
import { SourceEnum } from "lapyme/models";

let value: SourceEnum = "purchases";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sales" | "purchases" | "inventory" | Unrecognized<string>
```