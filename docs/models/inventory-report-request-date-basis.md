# InventoryReportRequestDateBasis

Aplica solo cuando se usan métricas derivadas de ventas. `commercial` usa la fecha de venta; `fiscal` usa la fecha contable.

## Example Usage

```typescript
import { InventoryReportRequestDateBasis } from "lapyme/models";

let value: InventoryReportRequestDateBasis = "fiscal";
```

## Values

```typescript
"commercial" | "fiscal"
```