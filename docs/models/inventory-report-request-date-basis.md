# InventoryReportRequestDateBasis

Solo aplica cuando se usan medidas derivadas de ventas. `commercial` usa la fecha de la venta; `fiscal` usa la fecha contable.

## Example Usage

```typescript
import { InventoryReportRequestDateBasis } from "lapyme/models";

let value: InventoryReportRequestDateBasis = "fiscal";
```

## Values

```typescript
"commercial" | "fiscal"
```