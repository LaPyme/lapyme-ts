# GananciasWithholding

## Example Usage

```typescript
import { GananciasWithholding } from "lapyme/models";

let value: GananciasWithholding = {
  regimen: "53",
  calculationBase: 658526,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `regimen`                                                                                                          | [models.ApiSharedEnum6a9369bfa4](../models/api-shared-enum6a9369bfa4.md)                                           | :heavy_check_mark:                                                                                                 | Código de régimen de Ganancias configurado.                                                                        |
| `calculationBase`                                                                                                  | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Base elegible de este pago en centavos ARS, sin IVA.                                                               |
| `isInscripto`                                                                                                      | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Override explícito de inscripción en Ganancias. Omitir para consultar ARCA; un fallo no permite registrar el pago. |