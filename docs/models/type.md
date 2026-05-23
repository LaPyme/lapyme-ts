# Type

## Example Usage

```typescript
import { Type } from "lapyme/models";

let value: Type = "api_error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api_error" | "authentication_error" | "authorization_error" | "business_error" | "external_dependency_error" | "idempotency_error" | "invalid_request_error" | "rate_limit_error" | Unrecognized<string>
```