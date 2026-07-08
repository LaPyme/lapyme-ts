# CashSource

Origen de efectivo para pagos cash. No combinar con registerId o safeId.

## Example Usage

```typescript
import { CashSource } from "lapyme/models";

let value: CashSource = {
  type: "safe",
  id: "b46ad7d2-4301-429e-91aa-58e0351d3544",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.ApiSharedEnum459535dab3](../models/api-shared-enum459535dab3.md) | :heavy_check_mark:                                                       | Tipo de origen de efectivo: caja operativa o caja fuerte.                |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID de la caja o caja fuerte.                                             |