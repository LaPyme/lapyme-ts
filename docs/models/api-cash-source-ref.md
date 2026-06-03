# ApiCashSourceRef

## Example Usage

```typescript
import { ApiCashSourceRef } from "lapyme/models";

let value: ApiCashSourceRef = {
  type: "register",
  id: "8007835c-c4da-40d0-ace7-9937879645d3",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [models.ApiCashSourceRefType](../models/api-cash-source-ref-type.md) | :heavy_check_mark:                                                   | Tipo de origen de efectivo: caja operativa o caja fuerte.            |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | ID de la caja o caja fuerte.                                         |