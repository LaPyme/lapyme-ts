# Type

## Example Usage

```typescript
import { Type } from "lapyme/models/operations";

let value: Type = "customer_payment";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"customer_payment" | "supplier_payment" | "treasury_movement" | "funds_transfer" | Unrecognized<string>
```