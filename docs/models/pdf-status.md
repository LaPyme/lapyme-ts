# PdfStatus

## Example Usage

```typescript
import { PdfStatus } from "lapyme/models";

let value: PdfStatus = "stored";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "stored" | "failed" | Unrecognized<string>
```