# Totals

Opcional. Si se envía, se verifica contra los totales calculados y un desvío rechaza el pedido. Si se omite, se calculan a partir de las líneas.

## Example Usage

```typescript
import { Totals } from "lapyme/models";

let value: Totals = {
  subtotal: 299586,
  taxAmount: 873533,
  total: 232940,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subtotal`         | *number*           | :heavy_check_mark: | N/A                |
| `taxAmount`        | *number*           | :heavy_check_mark: | N/A                |
| `total`            | *number*           | :heavy_check_mark: | N/A                |