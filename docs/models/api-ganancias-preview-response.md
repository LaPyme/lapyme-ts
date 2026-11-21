# ApiGananciasPreviewResponse

## Example Usage

```typescript
import { ApiGananciasPreviewResponse } from "lapyme/models";

let value: ApiGananciasPreviewResponse = {
  requestId: "<id>",
  data: {
    object: "supplier_payment_ganancias_preview",
    shouldWithhold: true,
    calculationBase: 993938,
    accumulatedBaseTotal: 462830,
    minimumNonTaxable: 777399,
    taxableAmount: 957488,
    rate: 2704.13,
    grossWithholding: 299150,
    previousWithholdings: 467148,
    netWithholding: 149371,
    minimumThreshold: 134299,
    finalWithholding: 243261,
    supplierName: "<value>",
    isInscriptoEnGanancias: false,
    personType: "JURIDICA",
    breakdown: [
      {
        label: "<value>",
        value: 4895.21,
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `requestId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [models.ApiGananciasPreviewResponseData](../models/api-ganancias-preview-response-data.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |