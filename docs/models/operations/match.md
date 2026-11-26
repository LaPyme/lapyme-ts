# Match

## Example Usage

```typescript
import { Match } from "lapyme/models/operations";

let value: Match = "exact_reference";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"exact_reference" | "amount_and_date" | Unrecognized<string>
```