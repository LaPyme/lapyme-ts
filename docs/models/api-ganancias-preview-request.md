# ApiGananciasPreviewRequest

## Example Usage

```typescript
import { ApiGananciasPreviewRequest } from "lapyme/models";

let value: ApiGananciasPreviewRequest = {
  regimen: "21",
  calculationBase: 339113,
  supplierId: "8800dc17-0880-48a2-a1d5-8a2126d79c33",
  paymentDate: new Date("2026-08-24"),
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `regimen`                                                                                                          | [models.ApiSharedEnum6a9369bfa4](../models/api-shared-enum6a9369bfa4.md)                                           | :heavy_check_mark:                                                                                                 | Código de régimen de Ganancias configurado.                                                                        |
| `calculationBase`                                                                                                  | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Base elegible de este pago en centavos ARS, sin IVA.                                                               |
| `isInscripto`                                                                                                      | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Override explícito de inscripción en Ganancias. Omitir para consultar ARCA; un fallo no permite registrar el pago. |
| `supplierId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `paymentDate`                                                                                                      | [Date](../types/rfcdate.md)                                                                                        | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `excludePaymentId`                                                                                                 | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |