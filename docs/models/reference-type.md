# ReferenceType

## Example Usage

```typescript
import { ReferenceType } from "lapyme/models";

let value: ReferenceType = "purchase";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sale" | "purchase" | Unrecognized<string>
```